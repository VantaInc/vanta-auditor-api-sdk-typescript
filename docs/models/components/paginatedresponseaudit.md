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
        auditStartDate: new Date("2025-01-16T21:14:40.490Z"),
        auditEndDate: new Date("2025-12-29T10:40:13.865Z"),
        earlyAccessStartsDate: new Date("2024-07-12T00:51:15.283Z"),
        framework: "<value>",
        allowAuditorEmails: [
          "<value>",
        ],
        allowAllAuditors: false,
        deletionDate: new Date("2023-08-23T03:25:05.951Z"),
        creationDate: new Date("2023-08-14T22:42:08.466Z"),
        modificationDate: new Date("2023-09-09T03:12:23.438Z"),
        completionDate: new Date("2023-02-05T09:12:54.561Z"),
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