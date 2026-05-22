# CompleteBackgroundChecksTaskSummary

Task summary for completing background checks.

## Example Usage

```typescript
import { CompleteBackgroundChecksTaskSummary } from "vanta-auditor-api-sdk/models/components";

let value: CompleteBackgroundChecksTaskSummary = {
  taskType: "COMPLETE_BACKGROUND_CHECKS",
  status: "DUE_SOON",
  dueDate: new Date("2024-08-15T16:31:35.306Z"),
  completionDate: new Date("2024-12-04T08:43:43.397Z"),
  disabled: {
    date: new Date("2025-02-27T01:41:24.066Z"),
    reason: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `taskType`                                                                                                                                                         | [components.TaskTypeCOMPLETEBACKGROUNDCHECKS](../../models/components/tasktypecompletebackgroundchecks.md)                                                         | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `status`                                                                                                                                                           | [components.TaskStatus](../../models/components/taskstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                 | The status of a task.<br/>- COMPLETE: The task has been completed.<br/>- DUE_SOON: The task is due soon.<br/>- OVERDUE: The task is overdue.<br/>- NONE: The task is not assigned. |
| `dueDate`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The due date of the task.                                                                                                                                          |
| `completionDate`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The date the task was completed.                                                                                                                                   |
| `disabled`                                                                                                                                                         | [components.CompleteBackgroundChecksTaskSummaryDisabled](../../models/components/completebackgroundcheckstasksummarydisabled.md)                                   | :heavy_check_mark:                                                                                                                                                 | If the task is disabled, the reason and date when it was disabled.                                                                                                 |