# DuplicateAuditRequest

Request body for duplicating an IRL audit into a new audit engagement.

## Example Usage

```typescript
import { DuplicateAuditRequest } from "vanta-auditor-api-sdk/models/components";

let value: DuplicateAuditRequest = {
  sourceAuditId: "<id>",
  displayName: "Adam.Lindgren44",
  auditStartDate: new Date("2024-01-18T11:29:13.976Z"),
  auditEndDate: new Date("2026-10-16T06:21:03.476Z"),
  earlyAccessStartsAt: new Date("2026-05-23T15:35:10.906Z"),
  allowAuditorEmails: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sourceAuditId`                                                                                                                                             | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | ID of the source IRL audit to duplicate.                                                                                                                    |
| `displayName`                                                                                                                                               | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | Display name for the new audit engagement.                                                                                                                  |
| `auditStartDate`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_check_mark:                                                                                                                                          | Start of the audit window for the new audit.                                                                                                                |
| `auditEndDate`                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_check_mark:                                                                                                                                          | End of the audit window for the new audit.                                                                                                                  |
| `earlyAccessStartsAt`                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_check_mark:                                                                                                                                          | When auditors gain access to the new audit.                                                                                                                 |
| `allowAuditorEmails`                                                                                                                                        | *string*[]                                                                                                                                                  | :heavy_check_mark:                                                                                                                                          | Emails of auditors who may access the new audit. Minimum one entry required.<br/>Each email must match an active user in the authenticated audit firm's domain. |