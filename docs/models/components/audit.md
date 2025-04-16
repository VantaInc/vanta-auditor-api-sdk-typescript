# Audit

## Example Usage

```typescript
import { Audit } from "vanta-auditor-api-sdk/models/components";

let value: Audit = {
  id: "<id>",
  customerOrganizationName: "<value>",
  customerDisplayName: "<value>",
  customerOrganizationId: "<id>",
  auditStartDate: new Date("2023-05-28T05:26:06.780Z"),
  auditEndDate: new Date("2023-04-01T16:46:31.728Z"),
  earlyAccessStartsDate: new Date("2025-04-28T15:58:02.627Z"),
  framework: "<value>",
  allowAuditorEmails: [
    "<value>",
  ],
  allowAllAuditors: false,
  deletionDate: new Date("2024-05-08T18:24:06.360Z"),
  creationDate: new Date("2024-06-23T23:17:32.846Z"),
  modificationDate: new Date("2025-01-26T19:16:06.007Z"),
  completionDate: new Date("2024-12-16T22:48:29.086Z"),
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
| `earlyAccessStartsDate`                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp at which auditors gain access to the audit. Occurs before the audit window begins   |
| `framework`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the framework for the audit                                                       |
| `allowAuditorEmails`                                                                          | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Emails of auditors with access to audit                                                       |
| `allowAllAuditors`                                                                            | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Set to true if all auditors in audit firm have access                                         |
| `deletionDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the audit was deleted                                                          |
| `creationDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the audit was created                                                          |
| `modificationDate`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the audit was updated                                                          |
| `completionDate`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when the audit was marked completed, and report was uploaded                        |