# CompleteOffboardingCustomTasksTaskSummary

Task summary for completing all offboarding custom tasks.

## Example Usage

```typescript
import { CompleteOffboardingCustomTasksTaskSummary } from "vanta-auditor-api-sdk/models/components";

let value: CompleteOffboardingCustomTasksTaskSummary = {
  taskType: "COMPLETE_CUSTOM_OFFBOARDING_TASKS",
  status: "NONE",
  dueDate: new Date("2025-09-07T05:27:01.688Z"),
  completionDate: new Date("2026-06-30T06:51:01.782Z"),
  disabled: {
    date: new Date("2025-11-18T02:03:49.402Z"),
    reason: "<value>",
  },
  incompleteCustomOffboardingTasks: [
    {
      name: "<value>",
    },
  ],
  completedCustomOffboardingTasks: [],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `taskType`                                                                                                                                                         | [components.TaskTypeCOMPLETECUSTOMOFFBOARDINGTASKS](../../models/components/tasktypecompletecustomoffboardingtasks.md)                                             | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `status`                                                                                                                                                           | [components.TaskStatus](../../models/components/taskstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                 | The status of a task.<br/>- COMPLETE: The task has been completed.<br/>- DUE_SOON: The task is due soon.<br/>- OVERDUE: The task is overdue.<br/>- NONE: The task is not assigned. |
| `dueDate`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The due date of the task.                                                                                                                                          |
| `completionDate`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The date the task was completed.                                                                                                                                   |
| `disabled`                                                                                                                                                         | [components.CompleteOffboardingCustomTasksTaskSummaryDisabled](../../models/components/completeoffboardingcustomtaskstasksummarydisabled.md)                       | :heavy_check_mark:                                                                                                                                                 | If the task is disabled, the reason and date when it was disabled.                                                                                                 |
| `incompleteCustomOffboardingTasks`                                                                                                                                 | [components.CustomTask](../../models/components/customtask.md)[]                                                                                                   | :heavy_check_mark:                                                                                                                                                 | Incomplete custom tasks that are relevant given a person's requirements.                                                                                           |
| `completedCustomOffboardingTasks`                                                                                                                                  | [components.CustomTask](../../models/components/customtask.md)[]                                                                                                   | :heavy_check_mark:                                                                                                                                                 | Custom tasks that have been completed and are relevant given a person's current requirements.                                                                      |