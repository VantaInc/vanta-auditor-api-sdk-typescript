# PaginatedResponseAudit

## Example Usage

```typescript
import { PaginatedResponseAudit } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAudit = {
  results: {
    data: [
      {
        id: "<id>",
        customerOrganizationName: "<value>",
        customerDisplayName: "<value>",
        customerOrganizationId: "<id>",
        auditStartDate: new Date("2025-01-11T11:34:32.929Z"),
        auditEndDate: new Date("2024-05-19T03:46:21.394Z"),
        earlyAccessStartsAt: new Date("2024-01-18T14:20:26.482Z"),
        framework: "<value>",
        allowAuditorEmails: [],
        allowAllAuditors: true,
        deletionDate: new Date("2025-12-21T19:08:12.104Z"),
        creationDate: new Date("2025-08-27T14:48:18.079Z"),
        modificationDate: new Date("2024-09-21T15:44:52.752Z"),
        completionDate: new Date("2024-09-16T18:11:07.619Z"),
        auditFocus: "EXTERNAL",
      },
    ],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `results`                                                | [components.Results](../../models/components/results.md) | :heavy_check_mark:                                       | N/A                                                      |