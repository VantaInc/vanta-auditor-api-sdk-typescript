# DeleteAuditControlCommentInput

Deletes an existing comment on a control.
Only the original author of the comment can delete it.

## Example Usage

```typescript
import { DeleteAuditControlCommentInput } from "vanta-auditor-api-sdk/models/components";

let value: DeleteAuditControlCommentInput = {
  email: "Brisa_Schulist72@yahoo.com",
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                                                                                | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Email address of the comment author.<br/>Must match an existing Vanta user who belongs to the audit firm making the API request.<br/>This email uniquely identifies the author across systems. |