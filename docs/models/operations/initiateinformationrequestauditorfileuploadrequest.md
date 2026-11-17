# InitiateInformationRequestAuditorFileUploadRequest

## Example Usage

```typescript
import { InitiateInformationRequestAuditorFileUploadRequest } from "vanta-auditor-api-sdk/models/operations";

let value: InitiateInformationRequestAuditorFileUploadRequest = {
  auditId: "<id>",
  requestId: "<id>",
  initiateAuditorFileUploadInput: {
    email: "Alayna_Dare@hotmail.com",
    filename: "example.file",
    contentType: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `auditId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `requestId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `initiateAuditorFileUploadInput`                                                                       | [components.InitiateAuditorFileUploadInput](../../models/components/initiateauditorfileuploadinput.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |