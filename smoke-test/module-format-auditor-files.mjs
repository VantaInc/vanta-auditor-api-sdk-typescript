import { createRequire } from "node:module";
import { Vanta, HTTPClient } from "vanta-auditor-api-sdk";
import { uploadInformationRequestAuditorFile } from "vanta-auditor-api-sdk/auditor-files";

const require = createRequire(import.meta.url);
const common = require("vanta-auditor-api-sdk");
const commonFiles = require("vanta-auditor-api-sdk/auditor-files");
const nativeFetch = globalThis.fetch;
try {
  for (const [format, Client, Transport, upload] of [
    ["ESM", Vanta, HTTPClient, uploadInformationRequestAuditorFile],
    ["CommonJS", common.Vanta, common.HTTPClient, commonFiles.uploadInformationRequestAuditorFile],
  ]) {
    let transfers = 0;
    globalThis.fetch = async () => {
      transfers++;
      return new Response(null, { status: 204 });
    };
    const client = new Client({
      bearerAuth: "module-format-fixture",
      httpClient: new Transport({
        fetcher: async (request) => request.url.endsWith("/finalize")
          ? Response.json({ id: "attached-file" }, { status: 201 })
          : Response.json({
            uploadId: "module-upload",
            url: "https://storage.example.test/",
            fields: { key: "module-fixture" },
            maxSizeBytes: 1_024,
            transferExpiresAt: new Date(Date.now() + 60_000).toISOString(),
            finalizationExpiresAt: new Date(Date.now() + 600_000).toISOString(),
          }, { headers: { date: new Date().toUTCString() } }),
      }),
    });
    const result = await upload(client, {
      auditId: "audit", requestId: "request", email: "auditor@example.com",
      filename: "guidance.csv", contentType: "text/csv", file: new Blob(["sample"]),
    });
    if (result.id !== "attached-file" || transfers !== 1) throw new Error(`${format}: upload failed`);
    console.log(`auditor-files ${format} upload OK`);
  }
} finally {
  globalThis.fetch = nativeFetch;
}
