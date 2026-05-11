# VantaDocumentLinkEvidence

Represents an external link in a Vanta Document.
The link points to documentation hosted outside of Vanta's system.

## Example Usage

```typescript
import { VantaDocumentLinkEvidence } from "vanta-auditor-api-sdk/models/components";

let value: VantaDocumentLinkEvidence = {
  type: "link",
  id: "<id>",
  url: "https://dark-opera.biz/",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `type`                                                        | *"link"*                                                      | :heavy_check_mark:                                            | Discriminator to identify this as an external link.           |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the file version in Vanta's system. |
| `url`                                                         | *string*                                                      | :heavy_check_mark:                                            | The URL pointing to the external documentation or resource.   |