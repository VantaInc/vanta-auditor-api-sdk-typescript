import { combineSignals } from "./lib/primitives.js";
import type { InitiateAuditorFileUploadInput } from "./models/components/initiateauditorfileuploadinput.js";
import type { UploadedAuditorFile } from "./models/components/uploadedauditorfile.js";
import { ConnectionError, RequestTimeoutError } from "./models/errors/httpclienterrors.js";
import { VantaError } from "./models/errors/vantaerror.js";
import type { InitiateInformationRequestAuditorFileUploadRequest } from "./models/operations/initiateinformationrequestauditorfileupload.js";
import type { Vanta } from "./sdk/sdk.js";

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
const UPLOAD_TIMEOUT_MS = 10 * 60_000;
const FINALIZE_ATTEMPTS = 5;

/** Upload and attach one auditor file. Only confirmed attachment resolves this call. */
export async function uploadInformationRequestAuditorFile(
  client: Vanta,
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
    parent: AbortSignal | undefined,
    run: (signal: AbortSignal) => Promise<T>,
  ): Promise<T> {
    const controller = new AbortController();
    const signal = combineSignals(parent, controller.signal)!;
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      signal.throwIfAborted();
      const result = await run(signal);
      signal.throwIfAborted();
      return result;
    } catch (error) {
      if (signal.aborted) throw fail(options.signal?.aborted ? "aborted" : "timeout");
      throw error;
    } finally {
      clearTimeout(timer);
    }
  }

  try {
    return await bounded(UPLOAD_TIMEOUT_MS, options.signal, async (signal) => {
      const grant = await bounded(REQUEST_TIMEOUT_MS, signal, (signal) =>
        client.audits.initiateInformationRequestAuditorFileUpload({
          auditId: input.auditId,
          requestId: input.requestId,
          initiateAuditorFileUploadInput: {
            email: input.email,
            filename: input.filename,
            contentType: input.contentType,
          },
        }, { retries: { strategy: "none" }, signal }),
      );
      uploadId = grant.uploadId;
      if (new URL(grant.url).protocol !== "https:") throw fail("invalid-response");
      phase = "transfer";
      if (input.file.size > grant.maxSizeBytes) throw fail("too-large");
      const form = new FormData();
      for (const [name, value] of Object.entries(grant.fields)) form.append(name, value);
      form.append("file", input.file, input.filename);
      const response = await fetch(grant.url, {
        method: "POST",
        body: form,
        credentials: "omit",
        redirect: "error",
        signal,
      });
      void response.body?.cancel().catch(() => {});
      if (!response.ok) throw fail("rejected", response.status);

      phase = "finalize";
      for (let attempt = 0; attempt < FINALIZE_ATTEMPTS; attempt++) {
        try {
          const attached = await bounded(REQUEST_TIMEOUT_MS, signal, (signal) =>
            client.audits.finalizeInformationRequestAuditorFileUpload({
              auditId: input.auditId,
              requestId: input.requestId,
              finalizeAuditorFileUploadInput: { uploadId: grant.uploadId },
            }, { retries: { strategy: "none" }, signal }),
          );
          if (!attached.id) throw fail("invalid-response");
          return attached;
        } catch (error) {
          const status = error instanceof VantaError ? error.statusCode : undefined;
          const retryable = status === 429 || (status !== undefined && status >= 500 && status < 600)
            || error instanceof ConnectionError || error instanceof RequestTimeoutError
            || (error instanceof AuditorFileUploadError && error.code === "timeout");
          if (!retryable) throw error;
          if (attempt === FINALIZE_ATTEMPTS - 1) throw fail("retry-exhausted", status);
          let delay = Math.min(10_000 * 2 ** attempt, 60_000);
          if (error instanceof VantaError) {
            const retryAfter = error.headers.get("retry-after") ?? "";
            const serverDate = Date.parse(error.headers.get("date") ?? "");
            const requested = /^\d+$/.test(retryAfter) ? Number(retryAfter) * 1_000
              : Date.parse(retryAfter) - (Number.isFinite(serverDate) ? serverDate : Date.now());
            if (!Number.isNaN(requested)) delay = Math.max(delay, requested);
          }
          if (delay > UPLOAD_TIMEOUT_MS) throw fail("retry-exhausted", status);
          signal.throwIfAborted();
          await new Promise<void>((resolve, reject) => {
            const abort = () => {
              clearTimeout(timer);
              signal.removeEventListener("abort", abort);
              reject(fail(options.signal?.aborted ? "aborted" : "timeout"));
            };
            const timer = setTimeout(() => {
              signal.removeEventListener("abort", abort);
              resolve();
            }, delay);
            signal.addEventListener("abort", abort, { once: true });
          });
        }
      }
      throw fail("retry-exhausted");
    });
  } catch (error) {
    if (error instanceof AuditorFileUploadError) throw error;
    if (error instanceof VantaError) {
      throw fail(error.statusCode >= 400 ? "rejected" : "invalid-response", error.statusCode);
    }
    throw fail(options.signal?.aborted ? "aborted" : "request-failed");
  }
}
