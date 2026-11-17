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
        startDate: "2021-01-15T00:00:00Z",
        endDate: "2021-01-15T00:00:00Z",
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
          dueDate: "2024-03-15T00:00:00Z",
          completionDate: "2024-01-20T00:00:00Z",
          numTasksCompleted: 5,
          numTasksOverdue: 2,
          numTasksDueSoon: 1,
        },
        lastReminded: "2024-01-15T00:00:00Z",
        policies: null,
        trainings: {
          status: "NO_SECURITY_TASKS",
          dueDate: "2024-03-15T00:00:00Z",
          completionDate: "2024-01-20T00:00:00Z",
        },
        backgroundChecks: {
          status: "SECURITY_TASKS_DUE_SOON",
          dueDate: "2024-03-15T00:00:00Z",
          completionDate: "2024-01-20T00:00:00Z",
        },
        deviceMonitoring: {
          status: "SECURITY_TASKS_COMPLETE",
          dueDate: "2024-03-15T00:00:00Z",
          completionDate: "2024-01-20T00:00:00Z",
        },
        customOnboarding: {
          status: "NO_SECURITY_TASKS",
          dueDate: "2024-03-15T00:00:00Z",
          completionDate: "2024-01-20T00:00:00Z",
        },
        customOffboarding: {
          status: "SECURITY_TASKS_OVERDUE",
          dueDate: "2024-03-15T00:00:00Z",
          completionDate: "2024-01-20T00:00:00Z",
        },
      },
    ],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: false,
      hasPreviousPage: true,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `results`                                                                                                                | [components.PaginatedResponsePersonnelPersonResults](../../models/components/paginatedresponsepersonnelpersonresults.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |