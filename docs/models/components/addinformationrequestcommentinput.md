# AddInformationRequestCommentInput

Comments enable communication between auditors and customers about
evidence requirements and submissions. All comments are immediately
visible to both parties once created.

## Example Usage

```typescript
import { AddInformationRequestCommentInput } from "vanta-auditor-api-sdk/models/components";

let value: AddInformationRequestCommentInput = {
  text: "<value>",
  email: "Louie_Koss9@hotmail.com",
  creationDate: new Date("2025-08-12T03:26:14.576Z"),
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                                                                                                 | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The text content of the comment.<br/>Must be at least 1 character. Can include questions, clarifications,<br/>or explanations related to the information request.                      |
| `email`                                                                                                                                                                                | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Email address of the comment author.<br/>Must match an existing Vanta user who belongs to the audit firm making the API request.<br/>This email uniquely identifies the author across systems. |
| `creationDate`                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                          | :heavy_check_mark:                                                                                                                                                                     | Timestamp when the comment was created in the external audit management system.<br/>This allows synchronizing comment timestamps from external systems.<br/>Format: ISO 8601 UTC timestamp. |