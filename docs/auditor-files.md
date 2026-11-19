# Upload auditor files

## Foundation

Auditors attach guidance files to an information request. Uploading one does not submit customer evidence or complete an evidence request. [PEX-12141](https://vanta.atlassian.net/browse/PEX-12141) tracks this feature.

## Requirements

One helper accepts metadata and a `Blob` or `File`, initiates the upload, transfers it and returns the confirmed attached file ID. Vanta owns authorization, accepted file types, byte limits and upload expiry.

For a file on disk in Node 20 or later:

```ts
import { openAsBlob } from "node:fs";
import { Vanta } from "vanta-auditor-api-sdk";
import { uploadInformationRequestAuditorFile } from "vanta-auditor-api-sdk/auditor-files";

const client = new Vanta({ bearerAuth: accessToken });
const attached = await uploadInformationRequestAuditorFile(client, {
  auditId,
  requestId,
  email: "auditor@example.com",
  filename: "guidance.csv",
  contentType: "text/csv",
  file: await openAsBlob("guidance.csv", { type: "text/csv" }),
}, { signal });
console.log(attached.id);
```

Browser callers can pass a `File`. Browser CORS still needs staging verification.

## Architecture

`src/auditor-files.ts` calls the generated SDK methods. Storage uses native `fetch` with credentials omitted and redirects rejected, copying all signed fields unchanged and appending the file last. SDK authentication, hooks, headers and proxy configuration are not inherited. The helper checks the returned byte limit and requires HTTPS. Failed transfers never finalize; initiation and transfer are never retried automatically.

Vanta and storage enforce expiry. The helper does not predict server time or reject grants based on the client clock. It bounds the entire call to ten minutes and each API request to thirty seconds, with caller cancellation throughout. Finalization has at most five attempts, with delays of 10, 20, 40 and 60 seconds increased by `Retry-After` when supplied. Only 429, 5xx, recognized connection failures and timeouts retry, always with the same upload ID. A delay exceeding the client budget stops retries instead of retrying early.

`AuditorFileUploadError` exposes a safe message, phase, code, optional upload ID and HTTP status. After an uncertain finalization failure, retain the upload ID and recover through `client.audits.finalizeInformationRequestAuditorFileUpload` with `finalizeAuditorFileUploadInput: { uploadId }`. Stop on terminal errors and respect expiry. Do not rerun the entire upload to recover a lost completion response. SDK debug logging and custom response hooks can expose signed grants; disable that logging for uploads.

## Verification

After installing dependencies in the root and `smoke-test`, run:

```sh
npm run build && npm run lint
npm --prefix smoke-test run typecheck
npm --prefix smoke-test run test:auditor-files
npm --prefix smoke-test run test:module-format
```

The credential-free `sdk-tests` job checks the helper and public ESM/CommonJS imports independently of the production smoke bypass. Tests cover protocol ordering, storage isolation, returned limits, failures, cancellation, bounded waits, same-ID recovery and safe errors. Boundary unit tests substitute `Blob.size`; they do not prove real storage policy.

The normal generation workflow reads the Auditor API spec from Obsidian. Before release, verify a real upload/list/download/checksum/delete journey and boundary/recovery behavior with a dedicated writable staging fixture. Mocked tests and the production read-only smoke do not provide that evidence.
