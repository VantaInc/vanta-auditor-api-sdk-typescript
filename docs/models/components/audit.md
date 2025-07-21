# Audit

## Example Usage

```typescript
import { Audit } from "vanta-auditor-api-sdk/models/components";

let value: Audit = {
  id: "<id>",
  customerOrganizationName: "<value>",
  customerDisplayName: "<value>",
  customerOrganizationId: "<id>",
  auditStartDate: new Date("2023-04-01T16:46:31.728Z"),
  auditEndDate: new Date("2025-04-28T15:58:02.627Z"),
  earlyAccessStartsAt: new Date("2024-06-23T23:17:32.846Z"),
  framework: "<value>",
  allowAuditorEmails: [
    "<value 1>",
    "<value 2>",
  ],
  allowAllAuditors: false,
  deletionDate: new Date("2023-10-30T12:38:45.232Z"),
  creationDate: new Date("2024-02-24T23:50:12.292Z"),
  modificationDate: new Date("2023-07-25T14:05:38.907Z"),
  completionDate: new Date("2025-12-04T08:41:58.178Z"),
  auditFocus: "EXTERNAL",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the audit.                                                          |
| `customerOrganizationName`                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The domain name of the customer organization being audited (e.g. vanta.com)                   |
| `customerDisplayName`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The human readable name of the customer organization being audited (e.g. Vanta)               |
| `customerOrganizationId`                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The uuid of the customer organization being audited                                           |
| `auditStartDate`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The start of the audit window. This is also when data collection for audit starts.            |
| `auditEndDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The end of the audit window.                                                                  |
| `earlyAccessStartsAt`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp at which auditors gain access to the audit. Occurs before the audit window begins   |
| `framework`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the framework for the audit                                                       |
| `allowAuditorEmails`                                                                          | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Emails of auditors with access to audit                                                       |
| `allowAllAuditors`                                                                            | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Set to true if all auditors in audit firm have access                                         |
| `deletionDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the audit was deleted                                                          |
| `creationDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the audit was created                                                          |
| `modificationDate`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the audit was updated                                                          |
| `completionDate`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the audit was marked completed, and report was uploaded                        |
| `auditFocus`                                                                                  | [components.AuditFocus](../../models/components/auditfocus.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |