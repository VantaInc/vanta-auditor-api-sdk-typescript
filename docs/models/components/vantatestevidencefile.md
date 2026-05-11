# VantaTestEvidenceFile

The evidence file for this test run.

## Example Usage

```typescript
import { VantaTestEvidenceFile } from "vanta-auditor-api-sdk/models/components";

let value: VantaTestEvidenceFile = {
  mimeType: "<value>",
  url: "https://official-digit.net/",
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mimeType`                                                                                                                                                            | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | The MIME type of the evidence file.<br/>Common types: "application/pdf" for workpapers, "text/csv" for raw data                                                       |
| `url`                                                                                                                                                                 | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | A presigned URL for downloading the evidence file.<br/>This URL is temporary and expires after a limited time.<br/>Request a new evidence list to get a fresh URL if expired. |