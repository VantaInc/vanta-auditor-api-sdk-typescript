# UpdateInformationRequestCommentInput

Updates an existing comment on an information request.
Only the original author of the comment can update it.

## Example Usage

```typescript
import { UpdateInformationRequestCommentInput } from "vanta-auditor-api-sdk/models/components";

let value: UpdateInformationRequestCommentInput = {
  text: "<value>",
  email: "Wilson_Barton27@yahoo.com",
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                                                                                                 | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The text content of the comment.<br/>Must be at least 1 character. Can include questions, clarifications,<br/>or explanations related to the information request.                      |
| `email`                                                                                                                                                                                | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Email address of the comment author.<br/>Must match an existing Vanta user who belongs to the audit firm making the API request.<br/>This email uniquely identifies the author across systems. |