# PersonnelGroup

A group record from the personnel population.

`id` and `name` are required. All other fields are optional to support customizable field visibility.

Omitted keys mean the column is not in the response; `null` means the column is present but empty.

## Example Usage

```typescript
import { PersonnelGroup } from "vanta-auditor-api-sdk/models/components";

let value: PersonnelGroup = {
  id: "5f2c939a52855e725c8d5824",
  name: "Engineering",
  members: 42,
  source: "Okta",
  tasks: [
    {
      name: "Security Training",
    },
    {
      name: "Policy Acceptance",
    },
  ],
  tasksLastUpdated: "2024-06-15T10:30:00.000Z",
  pointOfContact: "Jane Doe",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                 | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Unique identifier for the group.                                                                                                                     | 5f2c939a52855e725c8d5824                                                                                                                             |
| `name`                                                                                                                                               | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Display name of the group.                                                                                                                           | Engineering                                                                                                                                          |
| `members`                                                                                                                                            | *number*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | Number of people in this group within the audit scope.                                                                                               | 42                                                                                                                                                   |
| `source`                                                                                                                                             | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | The source of this group.<br/>For IDP-synced groups, this is the provider name (e.g., "Okta", "Azure AD").<br/>For manually created groups, this is "Vanta". | Okta                                                                                                                                                 |
| `tasks`                                                                                                                                              | [components.PersonnelGroupTask](../../models/components/personnelgrouptask.md)[]                                                                     | :heavy_minus_sign:                                                                                                                                   | Security tasks enabled for this group, or empty array if not available.                                                                              | [<br/>{<br/>"name": "Security Training"<br/>},<br/>{<br/>"name": "Policy Acceptance"<br/>}<br/>]                                                     |
| `tasksLastUpdated`                                                                                                                                   | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | When the group's task configuration was last updated, or null if never updated.<br/>ISO 8601 format.                                                 | 2024-06-15T10:30:00.000Z                                                                                                                             |
| `pointOfContact`                                                                                                                                     | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | Display name of the group's designated point of contact, or null if not set.                                                                         | Jane Doe                                                                                                                                             |