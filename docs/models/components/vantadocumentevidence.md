# VantaDocumentEvidence

Evidence in the form of a Vanta Document.
Vanta Documents are managed documents with metadata like expiration dates
and versioning. They can either be uploaded files stored in Vanta or
links to external documentation.

## Example Usage

```typescript
import { VantaDocumentEvidence } from "vanta-auditor-api-sdk/models/components";

let value: VantaDocumentEvidence = {
  title: "<value>",
  documentVersionId: "<id>",
  file: {
    type: "uploaded",
    id: "<id>",
    mimeType: "<value>",
    url: "https://phony-thorn.com/",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                                                                                                                                              | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The title of the document as displayed in Vanta.                                                                                                     |
| `description`                                                                                                                                        | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | Optional description providing additional context about the document.                                                                                |
| `expirationDate`                                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                        | :heavy_minus_sign:                                                                                                                                   | The date when the document version expires and should be renewed.<br/>Undefined if no expiration is set.<br/>Format: ISO 8601 UTC timestamp.         |
| `addedBy`                                                                                                                                            | [components.AddedBy](../../models/components/addedby.md)                                                                                             | :heavy_minus_sign:                                                                                                                                   | Information about the user who added this file version to the document.<br/>Undefined if the user information is not available.                      |
| `documentVersionId`                                                                                                                                  | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The unique identifier of the document version submitted as evidence.                                                                                 |
| `file`                                                                                                                                               | *components.FileT*                                                                                                                                   | :heavy_check_mark:                                                                                                                                   | The file or link associated with this document version.<br/>Use the `type` discriminator to determine whether it's an uploaded file<br/>or an external link. |