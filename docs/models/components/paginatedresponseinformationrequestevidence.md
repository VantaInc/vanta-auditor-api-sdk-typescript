# PaginatedResponseInformationRequestEvidence

## Example Usage

```typescript
import { PaginatedResponseInformationRequestEvidence } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseInformationRequestEvidence = {
  results: {
    data: [
      {
        id: "<id>",
        evidenceType: "OBSERVATION",
        creationDate: new Date("2026-02-18T14:25:41.049Z"),
        modificationDate: new Date("2025-11-07T01:45:08.928Z"),
        capturedSegmentIds: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        evidence: {
          title: "<value>",
          url: "https://glittering-carboxyl.net",
        },
      },
    ],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: false,
      hasPreviousPage: true,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                                      | [components.PaginatedResponseInformationRequestEvidenceResults](../../models/components/paginatedresponseinformationrequestevidenceresults.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |