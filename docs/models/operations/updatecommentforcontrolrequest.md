# UpdateCommentForControlRequest

## Example Usage

```typescript
import { UpdateCommentForControlRequest } from "vanta-auditor-api-sdk/models/operations";

let value: UpdateCommentForControlRequest = {
  auditId: "<id>",
  controlId: "<id>",
  commentId: "<id>",
  updateAuditControlCommentInput: {
    text: "<value>",
    email: "Jadyn_Hamill@yahoo.com",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `auditId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `controlId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `commentId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updateAuditControlCommentInput`                                                                       | [components.UpdateAuditControlCommentInput](../../models/components/updateauditcontrolcommentinput.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |