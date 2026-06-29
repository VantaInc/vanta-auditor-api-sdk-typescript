# AuditOrganizationNotifications

Organization notifications record returned by the auditor API.

Ad-hoc single-row payload per domain mirroring the shape of the
Organization → Notifications page. Only `id` is guaranteed; every other
field is optional because controlled audit views can strip any column
from the response.

## Example Usage

```typescript
import { AuditOrganizationNotifications } from "vanta-auditor-api-sdk/models/components";

let value: AuditOrganizationNotifications = {
  id: "5f2c939a52855e725c8d5824",
  preferredTimeZone: "America/New_York",
  employeeDigestFrequency: "WEEKLY",
  subscribedChannelTypes: [
    "EMAIL",
  ],
  externalNotifications: [
    {
      id: "65fa1b2c3d4e5f6789012345",
      address: "security-alerts@acme.example.com",
      cadence: "WEEKLY",
      unsubSettingsKey: "SUMMARY_EMPLOYEE",
      toggleIsSubscribed: true,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  | Example                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                         | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | Domain identifier of the audited organization.                                                                                                                               | 5f2c939a52855e725c8d5824                                                                                                                                                     |
| `preferredTimeZone`                                                                                                                                                          | *string*                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                           | IANA timezone identifier that determines when scheduled reminder<br/>notifications are sent. `null` means the organization has no configured<br/>preference ("Anytime" in the UI). | America/New_York                                                                                                                                                             |
| `employeeDigestFrequency`                                                                                                                                                    | *string*                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                           | Frequency at which personnel reminder digests are sent (e.g. `DAILY`,<br/>`WEEKLY`, or `NEVER`). `null` when no notification settings have been<br/>configured for the organization. | WEEKLY                                                                                                                                                                       |
| `subscribedChannelTypes`                                                                                                                                                     | *string*[]                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                           | Channels on which the personnel reminder digest is delivered (e.g.<br/>`["EMAIL"]` or `["EMAIL", "SLACK"]`).                                                                 | [<br/>"EMAIL"<br/>]                                                                                                                                                          |
| `externalNotifications`                                                                                                                                                      | [components.AuditOrganizationNotificationSubscription](../../models/components/auditorganizationnotificationsubscription.md)[]                                               | :heavy_minus_sign:                                                                                                                                                           | External notification subscriptions — one row per mailing-list address<br/>plus category pairing. Covers Compliance, Vendors, Access Reviews, and<br/>Trust Center categories. |                                                                                                                                                                              |