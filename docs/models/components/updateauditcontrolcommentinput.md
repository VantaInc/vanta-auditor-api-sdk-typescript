# UpdateAuditControlCommentInput

Updates an existing comment on a control.
Only the original author of the comment can update it.

## Example Usage

```typescript
import { UpdateAuditControlCommentInput } from "vanta-auditor-api-sdk/models/components";

let value: UpdateAuditControlCommentInput = {
  text: "<value>",
  email: "Margarete60@gmail.com",
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                                                                                                 | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The text content of the comment.<br/>Must be at least 1 character. Can include questions, clarifications,<br/>or explanations related to the control.                                  |
| `email`                                                                                                                                                                                | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Email address of the comment author.<br/>Must match an existing Vanta user who belongs to the audit firm making the API request.<br/>This email uniquely identifies the author across systems. |