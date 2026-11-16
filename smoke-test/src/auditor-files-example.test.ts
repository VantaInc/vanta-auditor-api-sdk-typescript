import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, expect, it, vi } from "vitest";
import { HTTPClient, Vanta } from "vanta-auditor-api-sdk";
import { AuditorFileUploadError } from "vanta-auditor-api-sdk/auditor-files";
import { uploadGuidance } from "../../examples/uploadInformationRequestAuditorFile.example.mjs";

afterEach(() => vi.unstubAllGlobals());

it("runs the documented upload example", async () => {
  const directory = await mkdtemp(join(tmpdir(), "auditor-file-example-"));
  const filePath = join(directory, "guidance.csv");
  await writeFile(filePath, "name\nexample\n");
  const storage = vi.fn<typeof fetch>(async (_url, init) => {
    if (!(init?.body instanceof FormData)) throw new Error("missing form");
    const file = init.body.get("file");
    if (!(file instanceof Blob)) throw new Error("missing file");
    expect(await file.text()).toBe("name\nexample\n");
    return new Response(null, { status: 204 });
  });
  vi.stubGlobal("fetch", storage);
  let initiations = 0;
  let completions = 0;
  let expired = false;
  let rejectFinalization = false;
  const client = new Vanta({
    bearerAuth: "example-oauth",
    httpClient: new HTTPClient({
      fetcher: async (value) => {
        const url = value instanceof Request ? value.url : String(value);
        if (url.endsWith("/finalize")) {
          completions++;
          if (rejectFinalization) return Response.json({ message: "unsupported" }, { status: 422 });
          return Response.json({ id: "attached-file" }, { status: 201 });
        }
        initiations++;
        return Response.json({
          uploadId: "example-upload",
          url: "https://storage.example.test/",
          fields: { key: "example-key" },
          maxSizeBytes: 1_024,
          transferExpiresAt: new Date(Date.now() + (expired ? -60_000 : 60_000)).toISOString(),
          finalizationExpiresAt: new Date(Date.now() + 600_000).toISOString(),
        }, { headers: { date: new Date().toUTCString() } });
      },
    }),
  });
  const metadata = { auditId: "audit", requestId: "request", email: "auditor@example.com", filename: "guidance.csv", contentType: "text/csv", filePath };
  try {
    expect(await uploadGuidance(client, metadata)).toEqual({ id: "attached-file" });
    expect(initiations).toBe(1);
    expect(completions).toBe(1);
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    await expect(uploadGuidance(client, metadata, AbortSignal.abort())).rejects.toBeInstanceOf(AuditorFileUploadError);
    expect(log).toHaveBeenCalledWith("Auditor file upload:", "initiate", "aborted", undefined);
    expired = true;
    await expect(uploadGuidance(client, metadata)).rejects.toMatchObject({ code: "expired" });
    expect(log).toHaveBeenCalledWith("The upload window expired; check the current attachment before restarting.");
    expired = false;
    rejectFinalization = true;
    await expect(uploadGuidance(client, metadata)).rejects.toMatchObject({ phase: "finalize", statusCode: 422 });
    expect(log).toHaveBeenCalledWith("Retain this uploadId and follow the recovery guide before restarting.");
    expect(storage).toHaveBeenCalledTimes(2);
    log.mockRestore();
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
