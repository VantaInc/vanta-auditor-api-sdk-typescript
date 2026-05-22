# AcceptPoliciesTaskSummary

Policy acceptance details for a person.

## Example Usage

```typescript
import { AcceptPoliciesTaskSummary } from "vanta-auditor-api-sdk/models/components";

let value: AcceptPoliciesTaskSummary = {
  taskType: "ACCEPT_POLICIES",
  status: "OVERDUE",
  dueDate: new Date("2024-10-20T01:33:39.462Z"),
  completionDate: new Date("2024-12-01T22:08:13.850Z"),
  disabled: {
    date: new Date("2024-01-30T03:25:56.001Z"),
    reason: "<value>",
  },
  unacceptedPolicies: [],
  acceptedPolicies: [],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `taskType`                                                                                                                                                         | [components.TaskTypeACCEPTPOLICIES](../../models/components/tasktypeacceptpolicies.md)                                                                             | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `status`                                                                                                                                                           | [components.TaskStatus](../../models/components/taskstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                 | The status of a task.<br/>- COMPLETE: The task has been completed.<br/>- DUE_SOON: The task is due soon.<br/>- OVERDUE: The task is overdue.<br/>- NONE: The task is not assigned. |
| `dueDate`                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The due date of the task.                                                                                                                                          |
| `completionDate`                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_check_mark:                                                                                                                                                 | The date the task was completed.                                                                                                                                   |
| `disabled`                                                                                                                                                         | [components.AcceptPoliciesTaskSummaryDisabled](../../models/components/acceptpoliciestasksummarydisabled.md)                                                       | :heavy_check_mark:                                                                                                                                                 | If the task is disabled, the reason and date when it was disabled.                                                                                                 |
| `unacceptedPolicies`                                                                                                                                               | [components.UnacceptedPolicies](../../models/components/unacceptedpolicies.md)[]                                                                                   | :heavy_check_mark:                                                                                                                                                 | Unaccepted policies that are relevant to the person.                                                                                                               |
| `acceptedPolicies`                                                                                                                                                 | [components.AcceptedPolicies](../../models/components/acceptedpolicies.md)[]                                                                                       | :heavy_check_mark:                                                                                                                                                 | Accepted policies that are relevant to the person.                                                                                                                 |