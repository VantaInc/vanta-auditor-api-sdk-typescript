# PaginatedResponseComment

## Example Usage

```typescript
import { PaginatedResponseComment } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseComment = {
  results: {
    data: [],
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

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                | [components.PaginatedResponseCommentResults](../../models/components/paginatedresponsecommentresults.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |