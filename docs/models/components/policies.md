# Policies

Policy acceptance task details, or null if not available.
Full Audit View only - omitted in Controlled Audit View.

## Example Usage

```typescript
import { Policies } from "vanta-auditor-api-sdk/models/components";

let value: Policies = {
  status: "SECURITY_TASKS_DUE_SOON",
  dueDate: "2024-03-15T00:00:00Z",
  completionDate: "2024-01-20T00:00:00Z",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | [components.PeopleSecurityTaskStatus](../../models/components/peoplesecuritytaskstatus.md) | :heavy_check_mark:                                                                         | Security task status for individual task categories.                                       |                                                                                            |
| `dueDate`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | Due date for incomplete task in ISO 8601 format, or null if none.                          | 2024-03-15 00:00:00 +0000 UTC                                                              |
| `completionDate`                                                                           | *string*                                                                                   | :heavy_check_mark:                                                                         | Completion date for completed task in ISO 8601 format, or null if incomplete.              | 2024-01-20 00:00:00 +0000 UTC                                                              |