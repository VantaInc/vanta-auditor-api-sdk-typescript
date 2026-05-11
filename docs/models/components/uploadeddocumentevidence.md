# UploadedDocumentEvidence

Evidence in the form of an uploaded document file.
The URL is a temporary presigned URL that expires after a certain period.

## Example Usage

```typescript
import { UploadedDocumentEvidence } from "vanta-auditor-api-sdk/models/components";

let value: UploadedDocumentEvidence = {
  id: "<id>",
  mimeType: "<value>",
  url: "https://enchanting-cork.net",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                             | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The unique identifier for the uploaded document in Vanta's system.                                                                                               |
| `filename`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The original filename of the uploaded document.<br/>Undefined if the filename was not captured during upload.                                                    |
| `mimeType`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The MIME type of the document indicating its file format.<br/>Common types: "application/pdf", "image/png", "image/jpeg", "text/plain"                           |
| `url`                                                                                                                                                            | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | A presigned URL for downloading the document.<br/>This URL is temporary and expires after a limited time.<br/>Request a new evidence list to get a fresh URL if expired. |