# Comment

## Example Usage

```typescript
import { Comment } from "vanta-auditor-api-sdk/models/components";

let value: Comment = {
  id: "<id>",
  auditEvidenceId: "<id>",
  text: "<value>",
  creationDate: new Date("2024-01-29T23:57:14.338Z"),
  modificationDate: new Date("2024-09-26T20:48:38.125Z"),
  deletionDate: new Date("2025-09-28T04:09:14.165Z"),
  email: "Dan_Jacobson@yahoo.com",
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
| `deletionDate`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | When the comment was deleted                                                                                       |
| `email`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The email of the comment author. This acts as a unique identifier to map users between Vanta and external systems. |