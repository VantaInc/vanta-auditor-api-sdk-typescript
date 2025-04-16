# PaginatedResponseEvidenceResults

## Example Usage

```typescript
import { PaginatedResponseEvidenceResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseEvidenceResults = {
  data: [
    {
      id: "<id>",
      externalId: "<id>",
      status: "Flagged",
      name: "<value>",
      deletionDate: new Date("2024-10-11T23:13:42.656Z"),
      creationDate: new Date("2025-11-05T07:41:06.984Z"),
      statusUpdatedDate: new Date("2024-05-18T09:01:14.230Z"),
      testStatus: "<value>",
      evidenceType: "Test",
      evidenceId: "<id>",
      relatedControls: [
        {
          name: "<value>",
          sectionNames: [
            "<value>",
          ],
        },
      ],
      description: "unfortunately failing fabricate",
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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [components.Evidence](../../models/components/evidence.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `pageInfo`                                                   | [components.PageInfo](../../models/components/pageinfo.md)   | :heavy_check_mark:                                           | Provides information about the pagination of a dataset.      |