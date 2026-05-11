# DeleteCommentForInformationRequestRequest

## Example Usage

```typescript
import { DeleteCommentForInformationRequestRequest } from "vanta-auditor-api-sdk/models/operations";

let value: DeleteCommentForInformationRequestRequest = {
  auditId: "<id>",
  requestId: "<id>",
  commentId: "<id>",
  deleteInformationRequestCommentInput: {
    email: "Una45@yahoo.com",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `auditId`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `requestId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `commentId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `deleteInformationRequestCommentInput`                                                                             | [components.DeleteInformationRequestCommentInput](../../models/components/deleteinformationrequestcommentinput.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |