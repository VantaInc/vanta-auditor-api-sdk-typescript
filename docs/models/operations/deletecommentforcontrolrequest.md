# DeleteCommentForControlRequest

## Example Usage

```typescript
import { DeleteCommentForControlRequest } from "vanta-auditor-api-sdk/models/operations";

let value: DeleteCommentForControlRequest = {
  auditId: "<id>",
  controlId: "<id>",
  commentId: "<id>",
  deleteAuditControlCommentInput: {
    email: "Manley.Erdman@hotmail.com",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `auditId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `controlId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `commentId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `deleteAuditControlCommentInput`                                                                       | [components.DeleteAuditControlCommentInput](../../models/components/deleteauditcontrolcommentinput.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |