import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { HTTPClient, Vanta, type Fetcher } from "vanta-auditor-api-sdk";
import {
  AuditorFileUploadError,
  uploadInformationRequestAuditorFile,
} from "vanta-auditor-api-sdk/auditor-files";

const NOW = Date.UTC(2026, 0, 1);
const input = () => ({
  auditId: "audit-1",
  requestId: "request-1",
  email: "auditor@example.com",
  filename: "guidance.csv",
  contentType: "text/csv",
  file: new Blob(["name\nexample\n"], { type: "text/csv" }),
});
const json = (body: unknown, status = 200, headers: HeadersInit = {}) =>
  Response.json(body, {
    status,
    headers: { date: new Date(NOW).toUTCString(), ...headers },
  });

function fixture(overrides = {}) {
  const grant = {
    uploadId: "upload-1",
    url: "https://storage.example.test/signed-secret",
    fields: { "key": "signed-key", "Content-Type": "text/csv", "X-Amz-Security-Token": "storage-secret" },
    maxSizeBytes: 52_428_800,
    transferExpiresAt: new Date(NOW + 60_000).toISOString(),
    finalizationExpiresAt: new Date(NOW + 600_000).toISOString(),
    ...overrides,
  };
  const initiate = vi.fn<Fetcher>(async () => json(grant));
  const finalize = vi.fn<Fetcher>(async () => json({ id: "file-1" }, 201));
  const requests: Request[] = [];
  const hook = vi.fn((request: Request) => {
    request.headers.set("cookie", "vanta-private=value");
    request.headers.set("x-vanta-custom", "sdk-only");
  });
  const api = new HTTPClient({
    fetcher: async (value, init) => {
      const request = value instanceof Request ? value : new Request(value, init);
      requests.push(request);
      return new URL(request.url).pathname.endsWith("/finalize")
        ? finalize(request)
        : initiate(request);
    },
  });
  api.addHook("beforeRequest", hook);
  const storage = vi.fn<typeof fetch>(async (url, init) => {
    new Request(url, init);
    return new Response(null, { status: 204 });
  });
  vi.stubGlobal("fetch", storage);
  const client = new Vanta({
    bearerAuth: "vanta-oauth-secret",
    httpClient: api,
    retryConfig: {
      strategy: "backoff",
      backoff: { initialInterval: 1, maxInterval: 10, maxElapsedTime: 100, exponent: 2 },
    },
  });
  return { client, grant, initiate, finalize, requests, storage, hook };
}

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["Date", "setTimeout", "clearTimeout"] });
  vi.setSystemTime(NOW);
});
afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("auditor file upload", () => {
  it("attaches only after confirmed finalization", async () => {
    const f = fixture();
    expect(await uploadInformationRequestAuditorFile(f.client, input())).toEqual({ id: "file-1" });
    expect(f.requests.map((r) => new URL(r.url).pathname)).toEqual([
      "/v1/audits/audit-1/information-requests/request-1/auditor-files/uploads",
      "/v1/audits/audit-1/information-requests/request-1/auditor-files/uploads/finalize",
    ]);
    expect(await f.requests[0]?.json()).toEqual({
      email: "auditor@example.com", filename: "guidance.csv", contentType: "text/csv",
    });
    expect(await f.requests[1]?.json()).toEqual({ uploadId: "upload-1" });
    expect(f.initiate).toHaveBeenCalledTimes(1);
    expect(f.storage).toHaveBeenCalledTimes(1);
  });

  it("isolates signed storage requests", async () => {
    const f = fixture();
    await uploadInformationRequestAuditorFile(f.client, input());
    const [url, init] = f.storage.mock.calls[0] ?? [];
    expect(url).toBe(f.grant.url);
    expect(init?.credentials).toBe("omit");
    expect(init?.redirect).toBe("error");
    expect(init?.method).toBe("POST");
    const headers = new Headers(init?.headers);
    expect([...headers]).toEqual([]);
    expect(init?.body).toBeInstanceOf(FormData);
    if (!(init?.body instanceof FormData)) throw new Error("missing form");
    expect([...init.body.keys()]).toEqual([...Object.keys(f.grant.fields), "file"]);
    for (const [name, value] of Object.entries(f.grant.fields)) expect(init.body.get(name)).toBe(value);
    const file = init.body.get("file");
    expect(file).toBeInstanceOf(Blob);
    if (!(file instanceof Blob)) throw new Error("missing file");
    expect(await file.text()).toBe("name\nexample\n");
    expect(f.hook).toHaveBeenCalledTimes(2);
    expect(f.requests[0]?.headers.get("authorization")).toBe("Bearer vanta-oauth-secret");
    const encoded = new Request(url!, init);
    expect(encoded.headers.get("content-type")).toMatch(/^multipart\/form-data; boundary=/);
    expect([...(await encoded.formData()).keys()]).toEqual([...Object.keys(f.grant.fields), "file"]);
  });

  it("preserves opaque upload IDs", async () => {
    const f = fixture({ uploadId: "opaque.upload:id/1" });
    await uploadInformationRequestAuditorFile(f.client, input());
    expect(await f.requests[1]?.json()).toEqual({ uploadId: f.grant.uploadId });
  });

  it.each(["reject", "stall"])("does not fail a successful transfer when body cancellation can %s", async (behavior) => {
    const f = fixture();
    const cancel = vi.fn(() => behavior === "reject"
      ? Promise.reject(new Error("storage-secret"))
      : new Promise<void>(() => {}));
    f.storage.mockImplementation(async () => new Response(new ReadableStream({ cancel }), { status: 200 }));
    expect(await uploadInformationRequestAuditorFile(f.client, input())).toEqual({ id: "file-1" });
    expect(cancel).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
  });

  it.each([52_428_800, 104_857_600])("uses the grant byte limit %i", async (limit) => {
    const f = fixture({ maxSizeBytes: limit });
    const equal = input();
    Object.defineProperty(equal.file, "size", { value: limit });
    await uploadInformationRequestAuditorFile(f.client, equal);
    expect(f.storage).toHaveBeenCalledTimes(1);
    const over = input();
    Object.defineProperty(over.file, "size", { value: limit + 1 });
    await expect(uploadInformationRequestAuditorFile(f.client, over)).rejects.toMatchObject({
      phase: "transfer", code: "too-large", uploadId: "upload-1",
    });
    expect(f.storage).toHaveBeenCalledTimes(1);
    expect(f.finalize).toHaveBeenCalledTimes(1);
  });

  it.each([400, 401, 403, 404, 409, 413, 422, 429, 500])("does not repeat initiation after %i", async (status) => {
    const f = fixture();
    f.initiate.mockResolvedValue(json({ message: "server detail" }, status));
    await expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({
      phase: "initiate", code: "rejected", statusCode: status,
    });
    expect(f.initiate).toHaveBeenCalledTimes(1);
    expect(f.storage).not.toHaveBeenCalled();
    expect(f.finalize).not.toHaveBeenCalled();
  });

  it.each([403, 307])("stops after transfer failure %i", async (status) => {
    const f = fixture();
    f.storage.mockResolvedValue(new Response(null, { status }));
    await expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({ phase: "transfer", statusCode: status });
    expect(f.finalize).not.toHaveBeenCalled();
    expect(f.storage).toHaveBeenCalledTimes(1);
  });

  it("does not finalize an interrupted transfer or disclose its raw error", async () => {
    const f = fixture();
    f.storage.mockRejectedValue(new Error(`${f.grant.url} storage-secret`));
    const error = await uploadInformationRequestAuditorFile(f.client, input()).catch((error: unknown) => error);
    expect(error).toBeInstanceOf(AuditorFileUploadError);
    expect(JSON.stringify(error)).not.toContain("secret");
    expect(String(error)).not.toContain("secret");
    expect(error).not.toHaveProperty("cause");
    expect(f.finalize).not.toHaveBeenCalled();
  });

  it.each([3_600_000, -3_600_000])("does not depend on the client clock for grant expiry: %i", async (skew) => {
    const f = fixture();
    vi.setSystemTime(NOW + skew);
    expect(await uploadInformationRequestAuditorFile(f.client, input())).toEqual({ id: "file-1" });
  });

  it("accepts grants without an exposed Date header", async () => {
    const f = fixture();
    f.initiate.mockImplementation(async () => Response.json(f.grant));
    expect(await uploadInformationRequestAuditorFile(f.client, input())).toEqual({ id: "file-1" });
  });

  it("reports an expired signed form rejected by storage without finalizing", async () => {
    const f = fixture({ transferExpiresAt: new Date(NOW).toISOString() });
    f.storage.mockResolvedValue(new Response(null, { status: 403 }));
    await expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({ code: "rejected", phase: "transfer", statusCode: 403 });
    expect(f.storage).toHaveBeenCalledTimes(1);
    expect(f.finalize).not.toHaveBeenCalled();
  });

  it("allows an in-flight transfer to cross its start deadline", async () => {
    const f = fixture({ transferExpiresAt: new Date(NOW + 2_000).toISOString() });
    f.storage.mockImplementation(async () => {
      await new Promise((resolve) => setTimeout(resolve, 3_000));
      return new Response(null, { status: 204 });
    });
    const result = uploadInformationRequestAuditorFile(f.client, input());
    await vi.advanceTimersByTimeAsync(3_000);
    expect(await result).toEqual({ id: "file-1" });
  });

  it("bounds a hanging transfer with the overall timeout", async () => {
    const f = fixture();
    f.storage.mockImplementation(async (_url, init) => new Promise((_resolve, reject) => {
      init?.signal?.addEventListener("abort", () => reject(new DOMException("aborted", "AbortError")), { once: true });
    }));
    const observed = expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({ code: "timeout", phase: "transfer" });
    await vi.advanceTimersByTimeAsync(600_000);
    await observed;
    expect(f.finalize).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });

  it.each([429, 500, 503])("retries safe completion failures %i using the same uploadId", async (status) => {
    const f = fixture();
    f.finalize.mockResolvedValueOnce(json({ message: "retry" }, status));
    const result = uploadInformationRequestAuditorFile(f.client, input());
    await vi.advanceTimersByTimeAsync(10_000);
    expect(await result).toEqual({ id: "file-1" });
    expect(f.finalize).toHaveBeenCalledTimes(2);
    expect(f.initiate).toHaveBeenCalledTimes(1);
    expect(f.storage).toHaveBeenCalledTimes(1);
    for (const request of f.requests.slice(1)) expect(await request.json()).toEqual({ uploadId: "upload-1" });
  });

  it("recovers a lost completion response without uploading again", async () => {
    const f = fixture();
    f.finalize.mockRejectedValueOnce(new TypeError("fetch failed: private detail"));
    const result = uploadInformationRequestAuditorFile(f.client, input());
    await vi.advanceTimersByTimeAsync(10_000);
    expect(await result).toEqual({ id: "file-1" });
    expect(f.initiate).toHaveBeenCalledTimes(1);
    expect(f.storage).toHaveBeenCalledTimes(1);
  });

  it("retries a timed-out completion using the same upload", async () => {
    const f = fixture();
    f.finalize.mockImplementationOnce(async (value) => new Promise((_resolve, reject) => {
      const request = value as Request;
      request.signal.addEventListener("abort", () => reject(new DOMException("aborted", "AbortError")), { once: true });
    }));
    const result = uploadInformationRequestAuditorFile(f.client, input());
    await vi.advanceTimersByTimeAsync(40_000);
    expect(await result).toEqual({ id: "file-1" });
    expect(f.finalize).toHaveBeenCalledTimes(2);
    expect(f.initiate).toHaveBeenCalledTimes(1);
    expect(f.storage).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
  });

  it("honors an HTTP-date Retry-After using server time", async () => {
    const f = fixture();
    vi.setSystemTime(NOW + 120_000);
    f.finalize.mockResolvedValueOnce(json({ message: "busy" }, 429, {
      "retry-after": new Date(NOW + 30_000).toUTCString(),
    }));
    const result = uploadInformationRequestAuditorFile(f.client, input());
    await vi.advanceTimersByTimeAsync(29_999);
    expect(f.finalize).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(1);
    expect(await result).toEqual({ id: "file-1" });
  });

  it.each([400, 401, 403, 404, 409, 413, 422])("stops completion retries for terminal %i", async (status) => {
    const f = fixture();
    f.finalize.mockResolvedValue(json({ message: "terminal" }, status));
    await expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({ phase: "finalize", statusCode: status });
    expect(f.finalize).toHaveBeenCalledTimes(1);
  });

  it.each([202, 200, 201])("does not report malformed or pending completion %i as attached", async (status) => {
    const f = fixture();
    f.finalize.mockResolvedValue(json({ processing: true }, status));
    await expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({ phase: "finalize", code: "invalid-response" });
    expect(f.finalize).toHaveBeenCalledTimes(1);
  });

  it("does not accept an empty attachment ID", async () => {
    const f = fixture();
    f.finalize.mockResolvedValue(json({ id: "" }, 201));
    await expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({ phase: "finalize", code: "invalid-response", uploadId: "upload-1" });
    expect(f.finalize).toHaveBeenCalledTimes(1);
  });

  it("retains a safe recovery ID when response JSON cannot be parsed", async () => {
    const f = fixture();
    f.finalize.mockResolvedValue(new Response("{signed-secret", { status: 500, headers: { "content-type": "application/json" } }));
    const error = await uploadInformationRequestAuditorFile(f.client, input()).catch((error: unknown) => error);
    expect(error).toMatchObject({ phase: "finalize", code: "request-failed", uploadId: "upload-1" });
    expect(String(error)).not.toContain("secret");
    expect(error).not.toHaveProperty("cause");
    expect(f.finalize).toHaveBeenCalledTimes(1);
  });

  it("honors Retry-After and bounds completion attempts", async () => {
    const f = fixture();
    f.finalize.mockImplementation(async () => json({ message: "busy" }, 429, { "retry-after": "30" }));
    const observed = expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({
      phase: "finalize", code: "retry-exhausted", uploadId: "upload-1", statusCode: 429,
    });
    await vi.advanceTimersByTimeAsync(29_999);
    expect(f.finalize).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(130_001);
    await observed;
    expect(f.finalize).toHaveBeenCalledTimes(5);
  });

  it.each([
    { name: "an hour", retryAfter: "3600" },
    { name: "numeric overflow", retryAfter: "9".repeat(400) },
  ])("stops when Retry-After exceeds the client budget: $name", async ({ retryAfter }) => {
    const f = fixture();
    f.finalize.mockResolvedValue(json({ message: "busy" }, 429, { "retry-after": retryAfter }));
    await expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({ code: "retry-exhausted", phase: "finalize", statusCode: 429, uploadId: "upload-1" });
    expect(f.finalize).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
  });

  it("bounds retry waits by the remaining overall timeout", async () => {
    const f = fixture();
    f.finalize.mockImplementation(async () => json({ message: "busy" }, 429, { "retry-after": "400" }));
    const observed = expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({ code: "timeout", phase: "finalize", uploadId: "upload-1" });
    await vi.advanceTimersByTimeAsync(600_000);
    await observed;
    expect(f.finalize).toHaveBeenCalledTimes(2);
    expect(f.storage).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
  });

  it("does not repeat a timed-out initiation", async () => {
    const f = fixture();
    f.initiate.mockImplementation(async (value) => new Promise((_resolve, reject) => {
      (value as Request).signal.addEventListener("abort", () => reject(new DOMException("aborted", "AbortError")), { once: true });
    }));
    const observed = expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({ code: "timeout", phase: "initiate" });
    await vi.advanceTimersByTimeAsync(30_000);
    await observed;
    expect(f.initiate).toHaveBeenCalledTimes(1);
    expect(f.storage).not.toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });

  it("does not retry arbitrary client or hook failures", async () => {
    const f = fixture();
    f.finalize.mockRejectedValue(new Error("private-hook-detail"));
    await expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({ code: "request-failed", phase: "finalize" });
    expect(f.finalize).toHaveBeenCalledTimes(1);
  });

  it.each(["initiate", "finalize"] as const)("redacts malformed API responses during %s", async (phase) => {
    const f = fixture();
    f[phase].mockResolvedValue(json({ private: "signed-secret" }, phase === "initiate" ? 200 : 201));
    const error = await uploadInformationRequestAuditorFile(f.client, input()).catch((error: unknown) => error);
    expect(error).toBeInstanceOf(AuditorFileUploadError);
    expect(error).toMatchObject({ phase, code: "invalid-response" });
    expect(JSON.stringify(error)).not.toContain("secret");
    expect(String(error)).not.toContain("secret");
    expect(error).not.toHaveProperty("cause");
    expect(error).not.toHaveProperty("rawResponse");
  });

  it("cancels before initiation without making a request", async () => {
    const f = fixture();
    await expect(uploadInformationRequestAuditorFile(f.client, input(), { signal: AbortSignal.abort() })).rejects.toMatchObject({ code: "aborted" });
    expect(f.requests).toHaveLength(0);
  });

  it.each(["initiate", "transfer", "finalize"] as const)("cancels active %s I/O and clears timers", async (phase) => {
    const f = fixture();
    const controller = new AbortController();
    let activeSignal: AbortSignal | undefined;
    const pending = (signal: AbortSignal) => new Promise<Response>((_resolve, reject) => {
      activeSignal = signal;
      signal.addEventListener("abort", () => reject(new DOMException("aborted", "AbortError")), { once: true });
    });
    if (phase === "transfer") {
      f.storage.mockImplementation(async (_url, init) => pending(init!.signal!));
    } else {
      f[phase].mockImplementation(async (value) => pending((value as Request).signal));
    }
    const observed = expect(uploadInformationRequestAuditorFile(f.client, input(), { signal: controller.signal })).rejects.toMatchObject({ code: "aborted", phase });
    await vi.advanceTimersByTimeAsync(1);
    expect(activeSignal?.aborted).toBe(false);
    controller.abort();
    await observed;
    expect(activeSignal?.aborted).toBe(true);
    expect(vi.getTimerCount()).toBe(0);
    if (phase !== "finalize") expect(f.finalize).not.toHaveBeenCalled();
  });

  it("cancels during a retry wait without another completion call", async () => {
    const f = fixture();
    const controller = new AbortController();
    f.finalize.mockResolvedValue(json({ message: "busy" }, 429));
    const observed = expect(uploadInformationRequestAuditorFile(f.client, input(), { signal: controller.signal })).rejects.toMatchObject({ code: "aborted", phase: "finalize" });
    await vi.advanceTimersByTimeAsync(1);
    controller.abort();
    await observed;
    expect(f.finalize).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
  });

  it.each([
    { url: "http://storage.example.test" }, { url: "not a URL" },
    { transferExpiresAt: "invalid" },
  ])("rejects malformed grants before storage: %j", async (grant) => {
    const f = fixture(grant);
    await expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toBeInstanceOf(AuditorFileUploadError);
    expect(f.storage).not.toHaveBeenCalled();
    expect(f.finalize).not.toHaveBeenCalled();
  });

  it("leaves rejection of URL credentials to the native request implementation", async () => {
    const f = fixture({ url: "https://user:password@storage.example.test" });
    await expect(uploadInformationRequestAuditorFile(f.client, input())).rejects.toMatchObject({ phase: "transfer", code: "request-failed", uploadId: "upload-1" });
    expect(f.storage).toHaveBeenCalledTimes(1);
    expect(f.finalize).not.toHaveBeenCalled();
  });
});
