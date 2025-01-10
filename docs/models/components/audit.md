# Audit

## Example Usage

```typescript
import { Audit } from "vanta-auditor-api-sdk/models/components";

let value: Audit = {
  id: "<id>",
  customerOrganizationName: "<value>",
  customerDisplayName: "<value>",
  customerOrganizationId: "<id>",
  auditStartDate: new Date("2023-03-19T20:31:56.909Z"),
  auditEndDate: new Date("2023-04-06T11:50:56.757Z"),
  earlyAccessStartsDate: new Date("2023-01-23T03:49:29.014Z"),
  framework: "<value>",
  allowAuditorEmails: [
    "<value>",
  ],
  allowAllAuditors: false,
  deletionDate: new Date("2025-07-01T13:13:56.703Z"),
  creationDate: new Date("2025-05-02T20:38:06.637Z"),
  modificationDate: new Date("2025-08-11T12:47:58.371Z"),
  completionDate: new Date("2025-12-08T13:34:36.747Z"),
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