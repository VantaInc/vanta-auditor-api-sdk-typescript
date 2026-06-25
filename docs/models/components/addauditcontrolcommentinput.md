# AddAuditControlCommentInput

Comments enable auditors and customers to collaborate on a control within an
audit. All comments are immediately visible to authorized parties once created.

## Example Usage

```typescript
import { AddAuditControlCommentInput } from "vanta-auditor-api-sdk/models/components";

let value: AddAuditControlCommentInput = {
  text: "<value>",
  email: "Laney98@hotmail.com",
  creationDate: new Date("2024-01-14T08:51:07.529Z"),
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                                                                                                 | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The text content of the comment.<br/>Must be at least 1 character. Can include questions, clarifications,<br/>or explanations related to the control.                                  |
| `email`                                                                                                                                                                                | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Email address of the comment author.<br/>Must match an existing Vanta user who belongs to the audit firm making the API request.<br/>This email uniquely identifies the author across systems. |
| `creationDate`                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                          | :heavy_check_mark:                                                                                                                                                                     | Timestamp when the comment was created in the external audit management system.<br/>This allows synchronizing comment timestamps from external systems.<br/>Format: ISO 8601 UTC timestamp. |