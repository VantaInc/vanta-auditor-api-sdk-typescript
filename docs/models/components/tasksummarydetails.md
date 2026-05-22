# TaskSummaryDetails

All detailed information about a person's tasks, split across task categories.

## Example Usage

```typescript
import { TaskSummaryDetails } from "vanta-auditor-api-sdk/models/components";

let value: TaskSummaryDetails = {
  completeTrainings: {
    taskType: "COMPLETE_TRAININGS",
    status: "COMPLETE",
    dueDate: new Date("2026-01-11T21:58:35.583Z"),
    completionDate: new Date("2024-03-09T21:00:37.118Z"),
    disabled: {
      date: new Date("2026-02-13T01:01:22.175Z"),
      reason: "<value>",
    },
    incompleteTrainings: [],
    completedTrainings: [
      {
        name: "<value>",
      },
    ],
  },
  acceptPolicies: {
    taskType: "ACCEPT_POLICIES",
    status: "NONE",
    dueDate: new Date("2026-02-03T18:21:09.605Z"),
    completionDate: new Date("2026-03-28T10:22:52.250Z"),
    disabled: {
      date: new Date("2024-01-30T03:25:56.001Z"),
      reason: "<value>",
    },
    unacceptedPolicies: [],
    acceptedPolicies: [],
  },
  completeCustomTasks: {
    taskType: "COMPLETE_CUSTOM_TASKS",
    status: "DUE_SOON",
    dueDate: new Date("2025-11-22T12:37:55.126Z"),
    completionDate: new Date("2025-01-08T12:59:11.550Z"),
    disabled: {
      date: new Date("2026-09-27T11:09:53.717Z"),
      reason: "<value>",
    },
    incompleteCustomTasks: [
      {
        name: "<value>",
      },
    ],
    completedCustomTasks: [],
  },
  completeOffboardingCustomTasks: {
    taskType: "COMPLETE_CUSTOM_OFFBOARDING_TASKS",
    status: "OVERDUE",
    dueDate: new Date("2024-04-19T21:39:24.471Z"),
    completionDate: new Date("2026-09-06T14:20:17.155Z"),
    disabled: {
      date: new Date("2025-11-18T02:03:49.402Z"),
      reason: "<value>",
    },
    incompleteCustomOffboardingTasks: [],
    completedCustomOffboardingTasks: [],
  },
  installDeviceMonitoring: {
    taskType: "INSTALL_DEVICE_MONITORING",
    status: "OVERDUE",
    dueDate: new Date("2025-07-06T10:08:58.190Z"),
    completionDate: new Date("2026-11-14T08:22:38.139Z"),
    disabled: {
      date: new Date("2024-08-19T06:45:02.774Z"),
      reason: "<value>",
    },
  },
  completeBackgroundChecks: {
    taskType: "COMPLETE_BACKGROUND_CHECKS",
    status: "COMPLETE",
    dueDate: new Date("2025-07-08T00:31:50.189Z"),
    completionDate: new Date("2026-09-02T20:36:42.999Z"),
    disabled: {
      date: new Date("2025-02-27T01:41:24.066Z"),
      reason: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `completeTrainings`                                                                                                          | [components.CompleteTrainingsTaskSummary](../../models/components/completetrainingstasksummary.md)                           | :heavy_check_mark:                                                                                                           | Task summary for completing all trainings.                                                                                   |
| `acceptPolicies`                                                                                                             | [components.AcceptPoliciesTaskSummary](../../models/components/acceptpoliciestasksummary.md)                                 | :heavy_check_mark:                                                                                                           | Policy acceptance details for a person.                                                                                      |
| `completeCustomTasks`                                                                                                        | [components.CompleteCustomTasksTaskSummary](../../models/components/completecustomtaskstasksummary.md)                       | :heavy_check_mark:                                                                                                           | Task summary for completing all custom tasks.                                                                                |
| `completeOffboardingCustomTasks`                                                                                             | [components.CompleteOffboardingCustomTasksTaskSummary](../../models/components/completeoffboardingcustomtaskstasksummary.md) | :heavy_check_mark:                                                                                                           | Task summary for completing all offboarding custom tasks.                                                                    |
| `installDeviceMonitoring`                                                                                                    | [components.InstallDeviceMonitoringTaskSummary](../../models/components/installdevicemonitoringtasksummary.md)               | :heavy_check_mark:                                                                                                           | Task summary for installing device monitoring.                                                                               |
| `completeBackgroundChecks`                                                                                                   | [components.CompleteBackgroundChecksTaskSummary](../../models/components/completebackgroundcheckstasksummary.md)             | :heavy_check_mark:                                                                                                           | Task summary for completing background checks.                                                                               |