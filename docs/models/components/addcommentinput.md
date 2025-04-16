# AddCommentInput

## Example Usage

```typescript
import { AddCommentInput } from "vanta-auditor-api-sdk/models/components";

let value: AddCommentInput = {
  text: "<value>",
  email: "Tatyana_Harber86@gmail.com",
  creationDate: new Date("2024-01-09T06:42:28.502Z"),
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Text value of the comment                                                                                                     |
| `email`                                                                                                                       | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Email of author. Must match an existing Vanta user and the user must exist under the Audit Firm who is making the API request |
| `creationDate`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | When the comment was created in the external system                                                                           |