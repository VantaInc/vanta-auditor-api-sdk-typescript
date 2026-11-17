# PersonnelPersonTaskStatus

Overall task status information, or null if not available.
Full Audit View only - omitted in Controlled Audit View.

## Example Usage

```typescript
import { PersonnelPersonTaskStatus } from "vanta-auditor-api-sdk/models/components";

let value: PersonnelPersonTaskStatus = {
  status: "SECURITY_TASKS_COMPLETE",
  dueDate: "2024-03-15T00:00:00Z",
  completionDate: "2024-01-20T00:00:00Z",
  numTasksCompleted: 5,
  numTasksOverdue: 2,
  numTasksDueSoon: 1,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `status`                                                                               | [components.PeopleTaskStatus](../../models/components/peopletaskstatus.md)             | :heavy_check_mark:                                                                     | Overall user task status.                                                              |                                                                                        |
| `dueDate`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Due date for the earliest incomplete task in ISO 8601 format, or null if none.         | 2024-03-15 00:00:00 +0000 UTC                                                          |
| `completionDate`                                                                       | *string*                                                                               | :heavy_check_mark:                                                                     | Completion date when all tasks are complete in ISO 8601 format, or null if incomplete. | 2024-01-20 00:00:00 +0000 UTC                                                          |
| `numTasksCompleted`                                                                    | *number*                                                                               | :heavy_check_mark:                                                                     | Count of completed tasks, or null if not available.                                    | 5                                                                                      |
| `numTasksOverdue`                                                                      | *number*                                                                               | :heavy_check_mark:                                                                     | Count of overdue tasks, or null if not available.                                      | 2                                                                                      |
| `numTasksDueSoon`                                                                      | *number*                                                                               | :heavy_check_mark:                                                                     | Count of tasks due soon, or null if not available.                                     | 1                                                                                      |