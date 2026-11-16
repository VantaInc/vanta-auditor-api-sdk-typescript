import type { VantaCore } from "./core.js";
import { auditsFinalizeInformationRequestAuditorFileUpload } from "./funcs/auditsFinalizeInformationRequestAuditorFileUpload.js";
import { auditsInitiateInformationRequestAuditorFileUpload } from "./funcs/auditsInitiateInformationRequestAuditorFileUpload.js";
import type { InitiateAuditorFileUploadInput } from "./models/components/initiateauditorfileuploadinput.js";
import type { UploadedAuditorFile } from "./models/components/uploadedauditorfile.js";
import { ConnectionError, RequestTimeoutError } from "./models/errors/httpclienterrors.js";
import type { InitiateInformationRequestAuditorFileUploadRequest } from "./models/operations/initiateinformationrequestauditorfileupload.js";

export type UploadInformationRequestAuditorFileInput =
  Pick<InitiateInformationRequestAuditorFileUploadRequest, "auditId" | "requestId">
  & InitiateAuditorFileUploadInput
  & { file: Blob };

export class AuditorFileUploadError extends Error {
  override readonly name = "AuditorFileUploadError";

  constructor(
    public readonly phase: "initiate" | "transfer" | "finalize",
    public readonly code:
      | "invalid-response"
      | "too-large"
      | "expired"
      | "aborted"
      | "timeout"
      | "rejected"
      | "request-failed"
      | "retry-exhausted",
    public readonly uploadId?: string,
    public readonly statusCode?: number,
  ) {
    super(`Auditor file upload ${phase} failed (${code}).`);
  }
}

const REQUEST_TIMEOUT_MS = 30_000;
const FINALIZE_ATTEMPTS = 5;

/** Upload and attach one auditor file. Only confirmed attachment resolves this call. */
export async function uploadInformationRequestAuditorFile(
  client: VantaCore,
  input: UploadInformationRequestAuditorFileInput,
  options: { signal?: AbortSignal } = {},
): Promise<UploadedAuditorFile> {
  let phase: "initiate" | "transfer" | "finalize" = "initiate";
  let uploadId: string | undefined;
  const fail = (
    code: AuditorFileUploadError["code"],
    status?: number,
  ) => new AuditorFileUploadError(phase, code, uploadId, status);

  async function bounded<T>(
    timeoutMs: number,
    run: (signal: AbortSignal) => Promise<T>,
  ): Promise<T> {
    if (options.signal?.aborted) throw fail("aborted");
    if (timeoutMs <= 0) throw fail("expired");
    const controller = new AbortController();
    let timedOut = false;
    const abort = () => controller.abort();
    options.signal?.addEventListener("abort", abort, { once: true });
    const timer = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, Math.min(timeoutMs, 2_147_483_647));
    try {
      const result = await run(controller.signal);
      if (options.signal?.aborted) throw fail("aborted");
      if (timedOut) throw fail("timeout");
      return result;
    } catch (error) {
      if (options.signal?.aborted) throw fail("aborted");
      if (timedOut) throw fail("timeout");
      throw error;
    } finally {
      clearTimeout(timer);
      options.signal?.removeEventListener("abort", abort);
    }
  }

  try {
    const startedAt = performance.now();
    const localStartedAt = Date.now();
    const [initiated, initiation] = await bounded(
      REQUEST_TIMEOUT_MS,
      (signal) => auditsInitiateInformationRequestAuditorFileUpload(client, {
        auditId: input.auditId,
        requestId: input.requestId,
        initiateAuditorFileUploadInput: {
          email: input.email,
          filename: input.filename,
          contentType: input.contentType,
        },
      }, { retries: { strategy: "none" }, signal }).$inspect(),
    );
    if (initiation.status !== "complete") throw fail("request-failed");
    if (initiation.response.status !== 200) {
      throw fail("rejected", initiation.response.status);
    }
    if (!initiated.ok) throw fail("invalid-response", 200);
    const grant = initiated.value;
    if (grant.uploadId.length === 0) {
      throw fail("invalid-response");
    }
    uploadId = grant.uploadId;
    let storageURL: URL;
    try {
      storageURL = new URL(grant.url);
    } catch {
      throw fail("invalid-response");
    }
    if (storageURL.protocol !== "https:" || storageURL.username || storageURL.password
      || !Number.isSafeInteger(grant.maxSizeBytes) || grant.maxSizeBytes <= 0) {
      throw fail("invalid-response");
    }
    const date = initiation.response.headers.get("date");
    const serverTime = date === null ? localStartedAt : Date.parse(date) + 1_000;
    if (!Number.isFinite(serverTime)) throw fail("invalid-response");
    // HTTP Date has second precision; request-start anchoring also consumes network time.
    const transferDeadline = startedAt + grant.transferExpiresAt.getTime() - serverTime;
    const finalizationDeadline = startedAt + grant.finalizationExpiresAt.getTime() - serverTime;
    if (finalizationDeadline < transferDeadline) throw fail("invalid-response");
    phase = "transfer";
    if (options.signal?.aborted) throw fail("aborted");
    if (performance.now() >= transferDeadline) throw fail("expired");
    if (input.file.size > grant.maxSizeBytes) throw fail("too-large");
    const form = new FormData();
    for (const [name, value] of Object.entries(grant.fields)) form.append(name, value);
    form.append("file", input.file, input.filename);
    const transferStatus = await bounded(
      finalizationDeadline - performance.now(),
      async (signal) => {
        const response = await fetch(grant.url, {
          method: "POST",
          body: form,
          credentials: "omit",
          redirect: "error",
          signal,
        });
        void response.body?.cancel().catch(() => {});
        return response.status;
      },
    );
    if (transferStatus < 200 || transferStatus >= 300) {
      throw fail("rejected", transferStatus);
    }

    phase = "finalize";
    let status: number | undefined;
    for (let attempt = 0; attempt < FINALIZE_ATTEMPTS; attempt++) {
      let retryAfter: string | null = null;
      let responseDate = serverTime + performance.now() - startedAt;
      try {
        const [finalized, completion] = await bounded(
          Math.min(REQUEST_TIMEOUT_MS, finalizationDeadline - performance.now()),
          (signal) => auditsFinalizeInformationRequestAuditorFileUpload(client, {
            auditId: input.auditId,
            requestId: input.requestId,
            finalizeAuditorFileUploadInput: { uploadId: grant.uploadId },
          }, { retries: { strategy: "none" }, signal }).$inspect(),
        );
        if (completion.status === "complete") {
          status = completion.response.status;
          if (status === 201 && finalized.ok && finalized.value.id.length > 0) {
            return finalized.value;
          }
          if (status !== 429 && (status < 500 || status >= 600)) {
            throw fail(status >= 400 ? "rejected" : "invalid-response", status);
          }
          retryAfter = completion.response.headers.get("retry-after");
          const date = completion.response.headers.get("date");
          const parsedDate = date === null ? NaN : Date.parse(date);
          if (Number.isFinite(parsedDate)) responseDate = parsedDate;
        } else if (completion.status !== "request-error" || finalized.ok
          || !(finalized.error instanceof ConnectionError
            || finalized.error instanceof RequestTimeoutError)) {
          throw fail("request-failed");
        }
      } catch (error) {
        if (!(error instanceof AuditorFileUploadError) || error.code !== "timeout") {
          throw error;
        }
      }
      if (attempt === FINALIZE_ATTEMPTS - 1) throw fail("retry-exhausted", status);
      let delay = Math.min(10_000 * 2 ** attempt, 60_000);
      if (retryAfter !== null) {
        const requested = /^\d+$/.test(retryAfter)
          ? Number(retryAfter) * 1_000
          : Date.parse(retryAfter) - responseDate;
        if (Number.isFinite(requested)) delay = Math.max(delay, requested);
      }
      if (delay >= finalizationDeadline - performance.now()) throw fail("expired", status);
      await new Promise<void>((resolve, reject) => {
        const abort = () => {
          clearTimeout(timer);
          options.signal?.removeEventListener("abort", abort);
          reject(fail("aborted"));
        };
        const timer = setTimeout(() => {
          options.signal?.removeEventListener("abort", abort);
          resolve();
        }, delay);
        options.signal?.addEventListener("abort", abort, { once: true });
        if (options.signal?.aborted) abort();
      });
    }
    throw fail("retry-exhausted", status);
  } catch (error) {
    if (error instanceof AuditorFileUploadError) throw error;
    throw fail(options.signal?.aborted ? "aborted" : "request-failed");
  }
}
