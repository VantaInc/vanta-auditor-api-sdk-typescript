# UpdateCommentForInformationRequestRequest

## Example Usage

```typescript
import { UpdateCommentForInformationRequestRequest } from "vanta-auditor-api-sdk/models/operations";

let value: UpdateCommentForInformationRequestRequest = {
  auditId: "<id>",
  requestId: "<id>",
  commentId: "<id>",
  updateInformationRequestCommentInput: {
    text: "<value>",
    email: "Fern40@gmail.com",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `auditId`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `requestId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `commentId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updateInformationRequestCommentInput`                                                                             | [components.UpdateInformationRequestCommentInput](../../models/components/updateinformationrequestcommentinput.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |