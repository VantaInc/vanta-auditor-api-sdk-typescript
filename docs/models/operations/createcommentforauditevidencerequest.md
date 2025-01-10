# CreateCommentForAuditEvidenceRequest

## Example Usage

```typescript
import { CreateCommentForAuditEvidenceRequest } from "vanta-auditor-api-sdk/models/operations";

let value: CreateCommentForAuditEvidenceRequest = {
  auditId: "<id>",
  auditEvidenceId: "<id>",
  addCommentInput: {
    text: "<value>",
    email: "Hollie65@yahoo.com",
    creationDate: new Date("2024-08-11T11:13:21.434Z"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `auditId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `auditEvidenceId`                                                        | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `addCommentInput`                                                        | [components.AddCommentInput](../../models/components/addcommentinput.md) | :heavy_check_mark:                                                       | N/A                                                                      |