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
        auditStartDate: new Date("2025-09-04T09:11:49.246Z"),
        auditEndDate: new Date("2025-11-22T04:11:06.908Z"),
        earlyAccessStartsDate: new Date("2024-02-25T06:02:44.560Z"),
        framework: "<value>",
        allowAuditorEmails: [
          "<value>",
        ],
        allowAllAuditors: false,
        deletionDate: new Date("2025-05-17T17:32:07.447Z"),
        creationDate: new Date("2024-08-02T16:03:07.089Z"),
        modificationDate: new Date("2024-09-14T13:50:38.886Z"),
        completionDate: new Date("2025-10-11T10:53:38.306Z"),
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