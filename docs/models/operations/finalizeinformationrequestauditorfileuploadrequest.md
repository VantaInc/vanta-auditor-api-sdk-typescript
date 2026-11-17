# FinalizeInformationRequestAuditorFileUploadRequest

## Example Usage

```typescript
import { FinalizeInformationRequestAuditorFileUploadRequest } from "vanta-auditor-api-sdk/models/operations";

let value: FinalizeInformationRequestAuditorFileUploadRequest = {
  auditId: "<id>",
  requestId: "<id>",
  finalizeAuditorFileUploadInput: {
    uploadId: "<id>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `auditId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `requestId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `finalizeAuditorFileUploadInput`                                                                       | [components.FinalizeAuditorFileUploadInput](../../models/components/finalizeauditorfileuploadinput.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |