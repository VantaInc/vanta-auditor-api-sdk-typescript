# CompleteTrainingsTaskSummary

Task summary for completing all trainings.

## Example Usage

```typescript
import { CompleteTrainingsTaskSummary } from "vanta-auditor-api-sdk/models/components";

let value: CompleteTrainingsTaskSummary = {
  taskType: "COMPLETE_TRAININGS",
  status: "OVERDUE",
  dueDate: new Date("2024-01-10T17:33:52.078Z"),
  completionDate: new Date("2025-10-22T13:13:09.097Z"),
  disabled: {
    date: new Date("2026-02-13T01:01:22.175Z"),
    reason: "<value>",
  },
  incompleteTrainings: [],
  completedTrainings: [],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `taskType`                                                                                                                                                         | [components.TaskTypeCOMPLETETRAININGS](../../models/components/tasktypecompletetrainings.md)                                                                       | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `status`                                                                                                                                                           | [components.TaskStatus](../../models/components/taskstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                 | The status of a task.<br/>- COMPLETE: The task has been completed.<br/>- DUE_SOON: The task is due soon.<br/>- OVERDUE: The task is overdue.<br/>- NONE: The task is not assigned. |
| `dueDate`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The due date of the task.                                                                                                                                          |
| `completionDate`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The date the task was completed.                                                                                                                                   |
| `disabled`                                                                                                                                                         | [components.Disabled](../../models/components/disabled.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                 | If the task is disabled, the reason and date when it was disabled.                                                                                                 |
| `incompleteTrainings`                                                                                                                                              | [components.Training](../../models/components/training.md)[]                                                                                                       | :heavy_check_mark:                                                                                                                                                 | Incomplete security trainings that are relevant given a person's requirements.                                                                                     |
| `completedTrainings`                                                                                                                                               | [components.Training](../../models/components/training.md)[]                                                                                                       | :heavy_check_mark:                                                                                                                                                 | Security trainings that have been completed and are relevant given a person's current requirements.                                                                |