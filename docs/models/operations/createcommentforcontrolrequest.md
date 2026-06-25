# CreateCommentForControlRequest

## Example Usage

```typescript
import { CreateCommentForControlRequest } from "vanta-auditor-api-sdk/models/operations";

let value: CreateCommentForControlRequest = {
  auditId: "<id>",
  controlId: "<id>",
  addAuditControlCommentInput: {
    text: "<value>",
    email: "Donato.Daniel16@yahoo.com",
    creationDate: new Date("2025-09-18T08:56:31.619Z"),
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `auditId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `controlId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `addAuditControlCommentInput`                                                                    | [components.AddAuditControlCommentInput](../../models/components/addauditcontrolcommentinput.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |