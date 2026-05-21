# DeviceMonitoring

Device monitoring task details, or null if not available.
Full Audit View only - omitted in Controlled Audit View.

## Example Usage

```typescript
import { DeviceMonitoring } from "vanta-auditor-api-sdk/models/components";

let value: DeviceMonitoring = {
  status: "NO_SECURITY_TASKS",
  dueDate: "2024-03-15",
  completionDate: "2024-01-20",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `status`                                                                                   | [components.PeopleSecurityTaskStatus](../../models/components/peoplesecuritytaskstatus.md) | :heavy_check_mark:                                                                         | Security task status for individual task categories.                                       |                                                                                            |
| `dueDate`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | Due date for incomplete task in ISO 8601 format, or null if none.                          | 2024-03-15                                                                                 |
| `completionDate`                                                                           | *string*                                                                                   | :heavy_check_mark:                                                                         | Completion date for completed task in ISO 8601 format, or null if incomplete.              | 2024-01-20                                                                                 |