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
      auditStartDate: new Date("2026-01-11T11:34:32.929Z"),
      auditEndDate: new Date("2025-05-19T03:46:21.394Z"),
      earlyAccessStartsAt: new Date("2025-01-17T14:20:26.482Z"),
      framework: "<value>",
      displayName: "Constance_Grady88",
      allowAuditorEmails: [
        "<value 1>",
        "<value 2>",
      ],
      allowAllAuditors: true,
      deletionDate: new Date("2024-06-14T13:54:22.879Z"),
      creationDate: new Date("2026-04-14T10:11:33.537Z"),
      modificationDate: new Date("2026-05-16T23:19:37.460Z"),
      completionDate: new Date("2024-01-21T00:38:09.443Z"),
      auditFocus: "EXTERNAL",
    },
  ],
  pageInfo: {
    endCursor: "<value>",
    hasNextPage: false,
    hasPreviousPage: true,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Audit](../../models/components/audit.md)[]     | :heavy_check_mark:                                         | N/A                                                        |
| `pageInfo`                                                 | [components.PageInfo](../../models/components/pageinfo.md) | :heavy_check_mark:                                         | Provides information about the pagination of a dataset.    |