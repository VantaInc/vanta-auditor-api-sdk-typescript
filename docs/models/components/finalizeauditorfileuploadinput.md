# FinalizeAuditorFileUploadInput

## Example Usage

```typescript
import { FinalizeAuditorFileUploadInput } from "vanta-auditor-api-sdk/models/components";

let value: FinalizeAuditorFileUploadInput = {
  uploadId: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `uploadId`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The `uploadId` returned by the start-upload operation for this application, audit and information request. |