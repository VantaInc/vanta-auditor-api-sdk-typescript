import { openAsBlob } from "node:fs";
import type { Vanta } from "vanta-auditor-api-sdk";
import {
  AuditorFileUploadError,
  uploadInformationRequestAuditorFile,
  type UploadInformationRequestAuditorFileInput,
} from "vanta-auditor-api-sdk/auditor-files";

export async function uploadGuidance(
  client: Vanta,
  input: Omit<UploadInformationRequestAuditorFileInput, "file"> & { filePath: string },
  signal?: AbortSignal,
) {
  const { filePath, ...metadata } = input;
  const file = await openAsBlob(filePath, { type: input.contentType });
  try {
    return await uploadInformationRequestAuditorFile(client, { ...metadata, file }, { signal });
  } catch (error) {
    if (error instanceof AuditorFileUploadError) {
      console.error("Auditor file upload:", error.phase, error.code, error.uploadId);
      if (error.phase === "finalize" && error.uploadId) {
        console.error("Recover completion with this uploadId; do not upload the file again.");
      } else if (error.code === "expired") {
        console.error("The upload window expired; check the current attachment before restarting.");
      }
    }
    throw error;
  }
}
