# PaginatedIssueSnapshotMetadataResponseResults

## Example Usage

```typescript
import { PaginatedIssueSnapshotMetadataResponseResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedIssueSnapshotMetadataResponseResults = {
  data: [],
  pageInfo: {
    endCursor: "<value>",
    hasNextPage: true,
    hasPreviousPage: false,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [components.IssueSnapshotMetadata](../../models/components/issuesnapshotmetadata.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pageInfo`                                                                             | [components.PageInfo](../../models/components/pageinfo.md)                             | :heavy_check_mark:                                                                     | Provides information about the pagination of a dataset.                                |