# PaginatedIssueSnapshotMetadataResponse

## Example Usage

```typescript
import { PaginatedIssueSnapshotMetadataResponse } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedIssueSnapshotMetadataResponse = {
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `results`                                                                                                                            | [components.PaginatedIssueSnapshotMetadataResponseResults](../../models/components/paginatedissuesnapshotmetadataresponseresults.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |