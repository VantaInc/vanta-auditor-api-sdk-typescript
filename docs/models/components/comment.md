# Comment

## Example Usage

```typescript
import { Comment } from "vanta-auditor-api-sdk/models/components";

let value: Comment = {
  id: "<id>",
  auditEvidenceId: "<id>",
  text: "<value>",
  creationDate: new Date("2024-07-21T22:45:05.685Z"),
  modificationDate: new Date("2023-01-29T03:01:55.688Z"),
  email: "Hermann58@gmail.com",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique identifier for the comment                                                                              |
| `auditEvidenceId`                                                                                                  | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The unique identifier for the audit evidence related to the comment.                                               |
| `text`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The comment message                                                                                                |
| `creationDate`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | When the comment was created                                                                                       |
| `modificationDate`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | When the comment was updated                                                                                       |
| `email`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The email of the comment author. This acts as a unique identifier to map users between Vanta and external systems. |