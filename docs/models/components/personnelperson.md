# PersonnelPerson

Personnel person data.

`id`, `name`, and `email` are required. All other fields are optional to support customizable field visibility.

Omitted keys mean the column is not in the response; `null` means the column is present but empty.

## Example Usage

```typescript
import { PersonnelPerson } from "vanta-auditor-api-sdk/models/components";

let value: PersonnelPerson = {
  id: "5f2c939a52855e725c8d5824",
  name: "John Doe",
  email: "john.doe@example.com",
  jobTitle: "Software Engineer",
  employmentStatus: "CURRENTLY_EMPLOYED",
  startDate: "2021-01-15",
  endDate: "2021-01-15",
  groups: [
    {
      name: "Engineering",
    },
    {
      name: "Admin",
    },
  ],
  source: {
    mainSource: "Okta",
    supplementarySource: "Google Workspace",
  },
  taskStatus: null,
  lastReminded: "2024-01-15",
  policies: {
    status: "SECURITY_TASKS_DUE_SOON",
    dueDate: "2024-03-15",
    completionDate: "2024-01-20",
  },
  trainings: {
    status: "NO_SECURITY_TASKS",
    dueDate: "2024-03-15",
    completionDate: "2024-01-20",
  },
  backgroundChecks: {
    status: "SECURITY_TASKS_DUE_SOON",
    dueDate: "2024-03-15",
    completionDate: "2024-01-20",
  },
  deviceMonitoring: {
    status: "SECURITY_TASKS_COMPLETE",
    dueDate: "2024-03-15",
    completionDate: "2024-01-20",
  },
  customOnboarding: {
    status: "NO_SECURITY_TASKS",
    dueDate: "2024-03-15",
    completionDate: "2024-01-20",
  },
  customOffboarding: {
    status: "SECURITY_TASKS_OVERDUE",
    dueDate: "2024-03-15",
    completionDate: "2024-01-20",
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                            | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | User ID - always present.                                                                                                                                       | 5f2c939a52855e725c8d5824                                                                                                                                        |
| `name`                                                                                                                                                          | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | Display name of the person - always present.                                                                                                                    | John Doe                                                                                                                                                        |
| `email`                                                                                                                                                         | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | Email address of the person - always present.                                                                                                                   | john.doe@example.com                                                                                                                                            |
| `jobTitle`                                                                                                                                                      | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Job title from HR system, or null if not available.                                                                                                             | Software Engineer                                                                                                                                               |
| `employmentStatus`                                                                                                                                              | [components.PersonnelPersonEmploymentStatus](../../models/components/personnelpersonemploymentstatus.md)                                                        | :heavy_minus_sign:                                                                                                                                              | Employment status, or null if not available.                                                                                                                    | CURRENTLY_EMPLOYED                                                                                                                                              |
| `startDate`                                                                                                                                                     | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Start date in ISO 8601 format (YYYY-MM-DD), or null if not available.<br/>Timezone depends on source: UTC if from HR system,<br/>customer timezone if manually entered. | 2021-01-15                                                                                                                                                      |
| `endDate`                                                                                                                                                       | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | End date in ISO 8601 format (YYYY-MM-DD), or null if currently employed.                                                                                        | 2021-01-15                                                                                                                                                      |
| `groups`                                                                                                                                                        | [components.Groups](../../models/components/groups.md)[]                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Groups (roles) the person belongs to. Present only when the column is in the response;<br/>use an empty array when there are no groups.                         | [<br/>{<br/>"name": "Engineering"<br/>},<br/>{<br/>"name": "Admin"<br/>}<br/>]                                                                                  |
| `source`                                                                                                                                                        | [components.Source](../../models/components/source.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                              | Source of user data, or null if not available.<br/>Full Audit View only - omitted in Controlled Audit View.                                                     |                                                                                                                                                                 |
| `taskStatus`                                                                                                                                                    | [components.PersonnelPersonTaskStatus](../../models/components/personnelpersontaskstatus.md)                                                                    | :heavy_minus_sign:                                                                                                                                              | Overall task status information, or null if not available.<br/>Full Audit View only - omitted in Controlled Audit View.                                         |                                                                                                                                                                 |
| `lastReminded`                                                                                                                                                  | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | Last date user was sent an onboarding reminder email in ISO 8601 format, or null if never reminded.<br/>Full Audit View only - omitted in Controlled Audit View. | 2024-01-15                                                                                                                                                      |
| `policies`                                                                                                                                                      | [components.Policies](../../models/components/policies.md)                                                                                                      | :heavy_minus_sign:                                                                                                                                              | Policy acceptance task details, or null if not available.<br/>Full Audit View only - omitted in Controlled Audit View.                                          |                                                                                                                                                                 |
| `trainings`                                                                                                                                                     | [components.Trainings](../../models/components/trainings.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                              | Security training task details, or null if not available.<br/>Full Audit View only - omitted in Controlled Audit View.                                          |                                                                                                                                                                 |
| `backgroundChecks`                                                                                                                                              | [components.BackgroundChecks](../../models/components/backgroundchecks.md)                                                                                      | :heavy_minus_sign:                                                                                                                                              | Background check task details, or null if not available.<br/>Full Audit View only - omitted in Controlled Audit View.                                           |                                                                                                                                                                 |
| `deviceMonitoring`                                                                                                                                              | [components.DeviceMonitoring](../../models/components/devicemonitoring.md)                                                                                      | :heavy_minus_sign:                                                                                                                                              | Device monitoring task details, or null if not available.<br/>Full Audit View only - omitted in Controlled Audit View.                                          |                                                                                                                                                                 |
| `customOnboarding`                                                                                                                                              | [components.CustomOnboarding](../../models/components/customonboarding.md)                                                                                      | :heavy_minus_sign:                                                                                                                                              | Custom onboarding task details, or null if not available.<br/>Full Audit View only - omitted in Controlled Audit View.                                          |                                                                                                                                                                 |
| `customOffboarding`                                                                                                                                             | [components.CustomOffboarding](../../models/components/customoffboarding.md)                                                                                    | :heavy_minus_sign:                                                                                                                                              | Custom offboarding task details, or null if not available.<br/>Full Audit View only - omitted in Controlled Audit View.                                         |                                                                                                                                                                 |