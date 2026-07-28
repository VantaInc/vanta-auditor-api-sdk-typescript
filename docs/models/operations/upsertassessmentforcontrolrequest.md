# UpsertAssessmentForControlRequest

## Example Usage

```typescript
import { UpsertAssessmentForControlRequest } from "vanta-auditor-api-sdk/models/operations";

let value: UpsertAssessmentForControlRequest = {
  auditId: "<id>",
  controlId: "<id>",
  upsertAuditControlAssessmentInput: {
    assessmentState: "MAJOR_NON_CONFORMITY",
    justification: "<value>",
    auditorEmail: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `auditId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `controlId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `upsertAuditControlAssessmentInput`                                                                          | [components.UpsertAuditControlAssessmentInput](../../models/components/upsertauditcontrolassessmentinput.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |