# VantaDocumentUploadedEvidence

Represents an uploaded file in a Vanta Document.
The file is stored in Vanta's system and accessed via a presigned URL.

## Example Usage

```typescript
import { VantaDocumentUploadedEvidence } from "vanta-auditor-api-sdk/models/components";

let value: VantaDocumentUploadedEvidence = {
  type: "uploaded",
  id: "<id>",
  mimeType: "<value>",
  url: "https://shameful-secrecy.name/",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                           | *"uploaded"*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                               | Discriminator to identify this as an uploaded file.                                                                                                              |
| `id`                                                                                                                                                             | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The unique identifier for the file version in Vanta's system.                                                                                                    |
| `filename`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | The original filename of the uploaded document.<br/>Undefined if the filename was not captured during upload.                                                    |
| `mimeType`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The MIME type of the document indicating its file format.<br/>Common types: "application/pdf", "image/png", "image/jpeg", "text/plain"                           |
| `url`                                                                                                                                                            | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | A presigned URL for downloading the document.<br/>This URL is temporary and expires after a limited time.<br/>Request a new evidence list to get a fresh URL if expired. |