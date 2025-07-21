# PaginatedResponseEvidenceResults

## Example Usage

```typescript
import { PaginatedResponseEvidenceResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseEvidenceResults = {
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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `data`                                                       | [components.Evidence](../../models/components/evidence.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `pageInfo`                                                   | [components.PageInfo](../../models/components/pageinfo.md)   | :heavy_check_mark:                                           | Provides information about the pagination of a dataset.      |