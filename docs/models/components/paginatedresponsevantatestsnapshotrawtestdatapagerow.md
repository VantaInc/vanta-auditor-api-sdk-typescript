# PaginatedResponseVantaTestSnapshotRawTestDataPageRow

## Example Usage

```typescript
import { PaginatedResponseVantaTestSnapshotRawTestDataPageRow } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseVantaTestSnapshotRawTestDataPageRow = {
  results: {
    data: [
      {
        resourceId: "<id>",
        resourceType: "<value>",
        rawJson: "<value>",
        dataTooLarge: true,
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

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                                                        | [components.PaginatedResponseVantaTestSnapshotRawTestDataPageRowResults](../../models/components/paginatedresponsevantatestsnapshotrawtestdatapagerowresults.md) | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |