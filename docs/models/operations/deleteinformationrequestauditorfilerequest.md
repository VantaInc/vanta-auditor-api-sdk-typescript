# DeleteInformationRequestAuditorFileRequest

## Example Usage

```typescript
import { DeleteInformationRequestAuditorFileRequest } from "vanta-auditor-api-sdk/models/operations";

let value: DeleteInformationRequestAuditorFileRequest = {
  auditId: "<id>",
  requestId: "<id>",
  auditorFileId: "<id>",
  deleteInformationRequestAuditorFileInput: {
    email: "Eulalia_Schuppe@gmail.com",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `auditId`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `requestId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `auditorFileId`                                                                                                            | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `deleteInformationRequestAuditorFileInput`                                                                                 | [components.DeleteInformationRequestAuditorFileInput](../../models/components/deleteinformationrequestauditorfileinput.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |