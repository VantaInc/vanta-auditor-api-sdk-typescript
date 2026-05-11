# CreateCommentForInformationRequestRequest

## Example Usage

```typescript
import { CreateCommentForInformationRequestRequest } from "vanta-auditor-api-sdk/models/operations";

let value: CreateCommentForInformationRequestRequest = {
  auditId: "<id>",
  requestId: "<id>",
  addInformationRequestCommentInput: {
    text: "<value>",
    email: "Clovis16@yahoo.com",
    creationDate: new Date("2024-10-24T23:16:45.523Z"),
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `auditId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `requestId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `addInformationRequestCommentInput`                                                                          | [components.AddInformationRequestCommentInput](../../models/components/addinformationrequestcommentinput.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |