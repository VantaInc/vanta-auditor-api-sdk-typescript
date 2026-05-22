# Person

## Example Usage

```typescript
import { Person } from "vanta-auditor-api-sdk/models/components";

let value: Person = {
  id: "<id>",
  userId: null,
  emailAddress: "Pablo74@yahoo.com",
  employment: {
    status: "FORMER",
    startDate: new Date("2025-07-05T08:27:21.495Z"),
    jobTitle: "District Response Facilitator",
    endDate: new Date("2026-06-04T12:58:57.076Z"),
  },
  leaveInfo: {
    startDate: new Date("2024-05-28T02:34:14.286Z"),
    endDate: new Date("2026-06-21T09:02:13.007Z"),
    status: "ACTIVE",
  },
  groupIds: [
    "<value 1>",
    "<value 2>",
  ],
  name: {
    first: "<value>",
    last: null,
    display: "<value>",
  },
  sources: {
    employment: {
      endDate: {
        integrationId: "<id>",
        resourceId: "<id>",
        type: "INTEGRATION",
      },
      startDate: {
        type: "SCIM",
      },
    },
    emailAddress: {
      integrationId: "<id>",
      resourceId: "<id>",
      type: "INTEGRATION",
    },
  },
  tasksSummary: {
    details: {
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
    },
    status: "OFFBOARDING_OVERDUE",
    dueDate: new Date("2024-08-20T05:28:35.163Z"),
    completionDate: new Date("2026-10-13T20:49:53.974Z"),
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                         | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `userId`                                                                                                                                     | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | The ID of the Vanta user account associated with this person, if one exists.                                                                 |
| `emailAddress`                                                                                                                               | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `employment`                                                                                                                                 | [components.Employment](../../models/components/employment.md)                                                                               | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `leaveInfo`                                                                                                                                  | [components.LeaveInfo](../../models/components/leaveinfo.md)                                                                                 | :heavy_check_mark:                                                                                                                           | If present, the user's active/upcoming leave. Empty if the user has no active/upcoming leave.                                                |
| `groupIds`                                                                                                                                   | *string*[]                                                                                                                                   | :heavy_check_mark:                                                                                                                           | The id of each group the user belongs to. This includes both manually created groups in Vanta and groups imported from an identity provider. |
| `name`                                                                                                                                       | [components.Name](../../models/components/name.md)                                                                                           | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `sources`                                                                                                                                    | [components.Sources](../../models/components/sources.md)                                                                                     | :heavy_check_mark:                                                                                                                           | The sources of the person's information.                                                                                                     |
| `tasksSummary`                                                                                                                               | [components.TasksSummary](../../models/components/taskssummary.md)                                                                           | :heavy_check_mark:                                                                                                                           | The person's tasks summary, which aggregates their current status across<br/>all of their relevant tasks.                                    |