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
        evidence: {
          title: "<value>",
          testId: "<id>",
          snapshotId: "<id>",
          testRunStatus: "IN_PROGRESS",
          executedAt: new Date("2026-07-18T18:34:49.347Z"),
          fileType: "TEST_RAW_DATA",
          file: {
            mimeType: "<value>",
            url: "https://rowdy-minor.name/",
          },
        },
      },
    ],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                                      | [components.PaginatedResponseInformationRequestEvidenceResults](../../models/components/paginatedresponseinformationrequestevidenceresults.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |