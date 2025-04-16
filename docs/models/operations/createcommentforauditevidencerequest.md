# CreateCommentForAuditEvidenceRequest

## Example Usage

```typescript
import { CreateCommentForAuditEvidenceRequest } from "vanta-auditor-api-sdk/models/operations";

let value: CreateCommentForAuditEvidenceRequest = {
  auditId: "<id>",
  auditEvidenceId: "<id>",
  addCommentInput: {
    text: "<value>",
    email: "Elizabeth88@gmail.com",
    creationDate: new Date("2024-06-24T01:05:32.743Z"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `auditId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `auditEvidenceId`                                                        | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `addCommentInput`                                                        | [components.AddCommentInput](../../models/components/addcommentinput.md) | :heavy_check_mark:                                                       | N/A                                                                      |