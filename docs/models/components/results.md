# Results

## Example Usage

```typescript
import { Results } from "vanta-auditor-api-sdk/models/components";

let value: Results = {
  data: [
    {
      id: "<id>",
      customerOrganizationName: "<value>",
      customerDisplayName: "<value>",
      customerOrganizationId: "<id>",
      auditStartDate: new Date("2024-08-24T11:59:25.466Z"),
      auditEndDate: new Date("2025-02-22T20:20:27.935Z"),
      earlyAccessStartsDate: new Date("2024-10-22T15:05:16.239Z"),
      framework: "<value>",
      allowAuditorEmails: [
        "<value>",
      ],
      allowAllAuditors: false,
      deletionDate: new Date("2024-08-20T04:36:26.084Z"),
      creationDate: new Date("2024-04-09T07:48:57.030Z"),
      modificationDate: new Date("2024-12-08T21:35:55.501Z"),
      completionDate: new Date("2024-04-24T14:17:38.418Z"),
    },
  ],
  pageInfo: {
    endCursor: "<value>",
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Audit](../../models/components/audit.md)[]     | :heavy_check_mark:                                         | N/A                                                        |
| `pageInfo`                                                 | [components.PageInfo](../../models/components/pageinfo.md) | :heavy_check_mark:                                         | Provides information about the pagination of a dataset.    |