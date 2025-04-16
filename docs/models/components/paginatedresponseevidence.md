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
        status: "Accepted",
        name: "<value>",
        deletionDate: new Date("2023-10-16T21:37:11.840Z"),
        creationDate: new Date("2023-03-03T23:58:48.804Z"),
        statusUpdatedDate: new Date("2023-08-17T02:29:26.675Z"),
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
        description: "bug back huzzah lest infamous swiftly sand upwardly",
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