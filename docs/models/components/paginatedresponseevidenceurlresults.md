# PaginatedResponseEvidenceUrlResults

## Example Usage

```typescript
import { PaginatedResponseEvidenceUrlResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseEvidenceUrlResults = {
  data: [],
  pageInfo: {
    endCursor: "<value>",
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [components.EvidenceUrl](../../models/components/evidenceurl.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `pageInfo`                                                         | [components.PageInfo](../../models/components/pageinfo.md)         | :heavy_check_mark:                                                 | Provides information about the pagination of a dataset.            |