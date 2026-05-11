# AcceptInformationRequestEvidenceInput

Input for accepting evidence on an information request, indicating that
the submitted evidence meets requirements. This changes the request's
approvalStatus to an approved state and creates an activity log entry.

## Example Usage

```typescript
import { AcceptInformationRequestEvidenceInput } from "vanta-auditor-api-sdk/models/components";

let value: AcceptInformationRequestEvidenceInput = {
  auditorEmail: "<value>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `auditorEmail`                                                                                                                       | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Email of the auditor accepting the evidence.<br/>Must match an existing Vanta user who belongs to the audit firm making the API request. |