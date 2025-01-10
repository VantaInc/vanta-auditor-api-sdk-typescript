# PaginatedResponseEvidence

## Example Usage

```typescript
import { PaginatedResponseEvidence } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseEvidence = {
  results: {
    data: [
      {
        id: "<id>",
        externalId: "<id>",
        status: "Ready for audit",
        name: "<value>",
        deletionDate: new Date("2024-05-05T01:11:09.453Z"),
        creationDate: new Date("2025-07-16T15:56:01.395Z"),
        statusUpdatedDate: new Date("2025-02-05T15:06:10.289Z"),
        testStatus: "<value>",
        evidenceType: "Evidence Request",
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
          "mature regularly mouser inject worth uh-huh substitution psst upon",
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

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                  | [components.PaginatedResponseEvidenceResults](../../models/components/paginatedresponseevidenceresults.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |