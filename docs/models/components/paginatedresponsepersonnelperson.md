# PaginatedResponsePersonnelPerson

## Example Usage

```typescript
import { PaginatedResponsePersonnelPerson } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponsePersonnelPerson = {
  results: {
    data: [
      {
        id: "5f2c939a52855e725c8d5824",
        name: "John Doe",
        email: "john.doe@example.com",
        jobTitle: "Software Engineer",
        employmentStatus: "CURRENTLY_EMPLOYED",
        startDate: "2021-01-15",
        endDate: "2021-01-15",
        groups: [
          {
            name: "Engineering",
          },
          {
            name: "Admin",
          },
        ],
        source: {
          mainSource: "Okta",
          supplementarySource: "Google Workspace",
        },
        taskStatus: {
          status: "SECURITY_TASKS_COMPLETE",
          dueDate: "2024-03-15",
          completionDate: "2024-01-20",
          numTasksCompleted: 5,
          numTasksOverdue: 2,
          numTasksDueSoon: 1,
        },
        lastReminded: "2024-01-15",
        policies: null,
        trainings: {
          status: "NO_SECURITY_TASKS",
          dueDate: "2024-03-15",
          completionDate: "2024-01-20",
        },
        backgroundChecks: {
          status: "SECURITY_TASKS_DUE_SOON",
          dueDate: "2024-03-15",
          completionDate: "2024-01-20",
        },
        deviceMonitoring: {
          status: "SECURITY_TASKS_COMPLETE",
          dueDate: "2024-03-15",
          completionDate: "2024-01-20",
        },
        customOnboarding: {
          status: "NO_SECURITY_TASKS",
          dueDate: "2024-03-15",
          completionDate: "2024-01-20",
        },
        customOffboarding: {
          status: "SECURITY_TASKS_OVERDUE",
          dueDate: "2024-03-15",
          completionDate: "2024-01-20",
        },
      },
    ],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `results`                                                                                                                | [components.PaginatedResponsePersonnelPersonResults](../../models/components/paginatedresponsepersonnelpersonresults.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |