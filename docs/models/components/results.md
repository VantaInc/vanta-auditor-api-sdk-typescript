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
      auditStartDate: new Date("2025-12-17T03:18:11.342Z"),
      auditEndDate: new Date("2025-03-02T10:57:52.881Z"),
      earlyAccessStartsDate: new Date("2025-01-11T11:34:32.929Z"),
      framework: "<value>",
      allowAuditorEmails: [
        "<value>",
      ],
      allowAllAuditors: false,
      deletionDate: new Date("2024-05-19T03:46:21.394Z"),
      creationDate: new Date("2024-09-12T16:56:53.667Z"),
      modificationDate: new Date("2024-01-18T14:20:26.482Z"),
      completionDate: new Date("2023-08-14T06:36:33.467Z"),
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