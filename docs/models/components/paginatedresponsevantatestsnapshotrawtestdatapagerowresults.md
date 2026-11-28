# PaginatedResponseVantaTestSnapshotRawTestDataPageRowResults

## Example Usage

```typescript
import { PaginatedResponseVantaTestSnapshotRawTestDataPageRowResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseVantaTestSnapshotRawTestDataPageRowResults = {
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
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                             | [components.VantaTestSnapshotRawTestDataPageRow](../../models/components/vantatestsnapshotrawtestdatapagerow.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `pageInfo`                                                                                                         | [components.PageInfo](../../models/components/pageinfo.md)                                                         | :heavy_check_mark:                                                                                                 | Provides information about the pagination of a dataset.                                                            |