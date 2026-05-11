# PaginatedIssueSnapshotItemsResponse

## Example Usage

```typescript
import { PaginatedIssueSnapshotItemsResponse } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedIssueSnapshotItemsResponse = {
  results: {
    data: [],
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `results`                                                                                                                      | [components.PaginatedIssueSnapshotItemsResponseResults](../../models/components/paginatedissuesnapshotitemsresponseresults.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |