# AccountAccess

Account access record from personnel population.

This unified interface represents account access data from all service types:
- IDP services (Okta, Azure AD, Google Workspace, etc.)
- First-party account services (AWS, Azure, GCP, Oracle Cloud, etc.)
- Role grants services (GCP, Azure role grants)
- Received/third-party applications

Only `id` and `accountName` are always present. Other fields are optional so
disallowed columns can be omitted (for example under controlled audit view).
When an optional field is present, `null` means the column is visible but empty
(only fields that are nullable in population data use `null`).

## Example Usage

```typescript
import { AccountAccess } from "vanta-auditor-api-sdk/models/components";

let value: AccountAccess = {
  id: "5f2c939a52855e725c8d5824",
  accountName: "john.doe@example.com",
  owner: "John Doe",
  role: [
    "Admin",
  ],
  mfa: true,
  createdDate: new Date("2024-01-15T10:30:00.000Z"),
  deactivatedDate: new Date("2024-06-20T08:00:00.000Z"),
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                  | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Unique identifier for the account.                                                                                                    | 5f2c939a52855e725c8d5824                                                                                                              |
| `accountName`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Account name or email address (primary identifier).                                                                                   | john.doe@example.com                                                                                                                  |
| `owner`                                                                                                                               | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Display name of the account owner, or null when the column is visible but unknown.                                                    | John Doe                                                                                                                              |
| `role`                                                                                                                                | *string*[]                                                                                                                            | :heavy_minus_sign:                                                                                                                    | Account roles; empty array when the column is visible but has no roles.                                                               | [<br/>"Admin"<br/>]                                                                                                                   |
| `status`                                                                                                                              | [components.AccountAccessStatus](../../models/components/accountaccessstatus.md)                                                      | :heavy_minus_sign:                                                                                                                    | Account status values for account access records.<br/>Unified status enum that covers all service types.                              |                                                                                                                                       |
| `mfa`                                                                                                                                 | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | Multi-factor authentication (MFA) status when present.<br/>`true` = MFA enabled, `false` = MFA not enabled, `null` = visible but unknown. | true                                                                                                                                  |
| `createdDate`                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                         | :heavy_minus_sign:                                                                                                                    | Account creation date when present, or null when visible but absent.                                                                  | 2024-01-15T10:30:00.000Z                                                                                                              |
| `deactivatedDate`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                         | :heavy_minus_sign:                                                                                                                    | Account deactivation date when present, or null when active.                                                                          | 2024-06-20T08:00:00.000Z                                                                                                              |