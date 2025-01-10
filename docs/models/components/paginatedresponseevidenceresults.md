# PaginatedResponseEvidenceResults

## Example Usage

```typescript
import { PaginatedResponseEvidenceResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseEvidenceResults = {
  data: [
    {
      id: "<id>",
      externalId: "<id>",
      status: "NA",
      name: "<value>",
      deletionDate: new Date("2023-01-21T14:14:48.878Z"),
      creationDate: new Date("2024-11-07T22:17:02.814Z"),
      statusUpdatedDate: new Date("2024-11-01T20:33:57.206Z"),
      testStatus: "<value>",
      evidenceType: "Policy",
      evidenceId: "<id>",
      relatedControls: [
        {
          name: "<value>",
          sectionNames: [
            "<value>",
          ],
        },
      ],
      description:
        "gadzooks yet athwart skateboard newsstand farm bourgeoisie ah how elliptical",
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