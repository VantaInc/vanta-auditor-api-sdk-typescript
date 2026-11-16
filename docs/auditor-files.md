# Upload auditor files

## Foundation

Auditors attach guidance files to an information request. These are auditor files; uploading one does not submit customer evidence or complete an evidence request. [PEX-12141](https://vanta.atlassian.net/browse/PEX-12141) tracks this SDK work.

## Requirements

Callers supply the audit, information request, auditor email, filename, content type and a `Blob` or `File`. One helper initiates the upload, transfers the file and confirms attachment. It resolves only when finalization returns the attached file ID. The server controls access, accepted file types and byte limits.

```ts
import { Vanta } from "vanta-auditor-api-sdk";
import { uploadInformationRequestAuditorFile } from "vanta-auditor-api-sdk/auditor-files";

const client = new Vanta({ bearerAuth: accessToken });
const attached = await uploadInformationRequestAuditorFile(client, {
  auditId,
  requestId,
  email: "auditor@example.com",
  filename: "guidance.csv",
  contentType: "text/csv",
  file, // Blob or File
}, { signal });
console.log(attached.id);
```

The [Node example](../examples/uploadInformationRequestAuditorFile.example.mts) uses `node:fs` `openAsBlob` to avoid reading the entire file into a JavaScript buffer. It requires Node 20 or later. Browser callers can pass a `File`; browser CORS and exposed `Date` headers still need staging verification.

## Architecture

The `auditor-files` subpath owns orchestration. It uses generated initiation and finalization functions and types. The existing wildcard package export supports ESM and CommonJS without changing the generated root index.

The helper copies every signed form field unchanged and appends the file last. Native `fetch` sets the multipart boundary. Storage requests omit credentials and reject redirects. They use a separate transport, so SDK authentication, hooks, custom headers and proxy configuration are not inherited. No automatic initiation or transfer retry occurs. A failed transfer never triggers finalization.

`maxSizeBytes` comes from the grant. Oversized input fails before storage. This can leave an unfinished upload reservation until server expiry; there is no finalize-as-abort operation.

`transferExpiresAt` is a deadline for starting a transfer. An active transfer can cross it, but remains bounded by `finalizationExpiresAt`. The helper anchors the API's HTTP `Date` to request-start monotonic time and conservatively accounts for its one-second precision. If `Date` is absent or inaccessible, the caller's system clock must be synchronized with the server. Clock skew in that mode can reject a valid grant early or leave rejection to the server. Keep system time synchronized; inspect the attachment and upload ID before restarting an expired attempt.

Initiation and each finalization request have a 30-second limit. Finalization makes at most five attempts with delays of 10, 20, 40 and 60 seconds, increased by `Retry-After` when supplied. Requests and waits stop at the finalization deadline or caller cancellation. Only 429, 5xx, recognized connection failures and request timeouts can retry, always with the same upload ID. Nested SDK retries are disabled. The API owners must confirm these finite budgets before merge.

`AuditorFileUploadError` exposes `phase`, `code`, optional `uploadId` and optional `statusCode`. Its message does not include signed URLs, fields, raw response bodies or raw error causes. Disable SDK debug logging (`VANTA_DEBUG` / `debugLogger`) and avoid logging response bodies in custom hooks: those user-configured loggers can expose the initiation grant independently of helper error handling.

After a finalization error, attachment can be uncertain, including after cancellation or a lost response. Retain `uploadId`. Recover through `client.audits.finalizeInformationRequestAuditorFileUpload` with the same audit, request and `finalizeAuditorFileUploadInput: { uploadId }`, before the grant expires. Apply backoff and stop on terminal errors. Do not rerun the entire upload to recover a lost finalization response. An upload ID differs from the resulting auditor-file ID; successful repeated finalization returns the original file ID.

### Draft source and merge prerequisites

The normal public schema at `https://vanta.mintlify.app/reference/auditor-api.json` does not yet contain the upload operations. The initial generation used its 48-path baseline (SHA-256 `1411f0e0421bb75d777e7d4979d54da9f4bf4eb118ca3f321a4e13e637aef8b6`) plus the two operations and `OutboundError` from Obsidian commit `f21be711d41b7600c91b7e6b2b70dbde99ad568d`, `apps/api-external/assets/__generated__/auditor-api/v1/api-spec.yaml`. The existing public schema already contains the upload component models.

`.speakeasy/auditor-files-candidate-overlay.yaml` preserves that candidate for reproducible draft checks. It is deliberately absent from the normal generation workflow. Before merge/release, API owners must confirm endpoint availability, completion semantics, retry budgets and clock behavior. Publish the operations through the normal source and pass ordinary regeneration without the candidate overlay. Otherwise the next generated PR can remove the endpoints.

## Verification

Run these credential-free checks after building the SDK and installing dependencies in the root, `smoke-test` and `examples` directories:

```sh
npm run build
npm run lint
npm --prefix smoke-test run check:auditor-files-example
npm --prefix smoke-test run test:auditor-files
npm --prefix smoke-test run test:module-format
```

The independent `sdk-tests` PR job runs these checks without secrets or the production smoke bypass. Its dedicated Vitest config selects only the helper and example suites. Default production-read discovery excludes these suites and writable live tests. Captured transports cover sequencing, signed fields and serialized multipart, credential isolation, policy boundaries, clock skew, active cancellation, deadlines, retry exhaustion, same-ID recovery and redacted errors. The executable example uses a real temporary file. Unit boundary tests substitute `Blob.size`; they do not prove real storage limits or memory use.

With the authenticated, checksum-verified pinned Speakeasy CLI available:

```sh
SPEAKEASY_CLI=/path/to/speakeasy bash scripts/check-staged-upload-regeneration.sh --candidate
# Required again once the public source contains the operations:
SPEAKEASY_CLI=/path/to/speakeasy bash scripts/check-staged-upload-regeneration.sh
```

The script uses a disposable clone of committed HEAD. It compares existing schema contracts, regenerates normally and after adding a model property, checks helper preservation, reruns build/lint/tests, and executes packed ESM/CommonJS consumers. It does not publish a package or upload a registry spec.

Real Vanta/S3 acceptance remains a release prerequisite: a dedicated writable staging fixture must pass a small upload/list/download/checksum/delete journey, the actual 52,428,800-byte boundary and one-byte-over storage rejection, lost-finalization recovery, real expiry/interruption and memory profiling. Reserve unfinished-session headroom, serialize and pace requests to the owner-confirmed quotas, and delete attached fixtures. Unfinished sessions need real expiry or an owner-approved termination mechanism. The existing production read-only smoke and mocked tests do not supply this evidence. Writable tests must use explicit dedicated configuration and stay outside default test discovery.
