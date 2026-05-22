# InstallDeviceMonitoringTaskSummary

Task summary for installing device monitoring.

## Example Usage

```typescript
import { InstallDeviceMonitoringTaskSummary } from "vanta-auditor-api-sdk/models/components";

let value: InstallDeviceMonitoringTaskSummary = {
  taskType: "INSTALL_DEVICE_MONITORING",
  status: "COMPLETE",
  dueDate: new Date("2025-12-06T14:58:01.446Z"),
  completionDate: null,
  disabled: null,
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `taskType`                                                                                                                                                         | [components.TaskTypeINSTALLDEVICEMONITORING](../../models/components/tasktypeinstalldevicemonitoring.md)                                                           | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `status`                                                                                                                                                           | [components.TaskStatus](../../models/components/taskstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                 | The status of a task.<br/>- COMPLETE: The task has been completed.<br/>- DUE_SOON: The task is due soon.<br/>- OVERDUE: The task is overdue.<br/>- NONE: The task is not assigned. |
| `dueDate`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The due date of the task.                                                                                                                                          |
| `completionDate`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The date the task was completed.                                                                                                                                   |
| `disabled`                                                                                                                                                         | [components.InstallDeviceMonitoringTaskSummaryDisabled](../../models/components/installdevicemonitoringtasksummarydisabled.md)                                     | :heavy_check_mark:                                                                                                                                                 | If the task is disabled, the reason and date when it was disabled.                                                                                                 |