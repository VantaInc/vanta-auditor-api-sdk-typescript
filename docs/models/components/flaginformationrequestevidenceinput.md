# FlagInformationRequestEvidenceInput

Input for flagging evidence on an information request, indicating issues
that need to be addressed. This changes the request's approvalStatus to
a flagged state and creates an activity log entry.

The customer will be notified and can resubmit evidence after addressing the issues.

## Example Usage

```typescript
import { FlagInformationRequestEvidenceInput } from "vanta-auditor-api-sdk/models/components";

let value: FlagInformationRequestEvidenceInput = {
  auditorEmail: "<value>",
  reason: "<value>",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auditorEmail`                                                                                                                                                         | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | Email of the auditor flagging the evidence.<br/>Must match an existing Vanta user who belongs to the audit firm making the API request.                                |
| `reason`                                                                                                                                                               | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | Detailed explanation of what issues were found with the evidence.<br/>This reason is visible to the customer and guides them on what to fix.<br/>Must be at least 1 character. |