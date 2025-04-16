# PaginatedResponseCommentResults

## Example Usage

```typescript
import { PaginatedResponseCommentResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseCommentResults = {
  data: [
    {
      id: "<id>",
      auditEvidenceId: "<id>",
      text: "<value>",
      creationDate: new Date("2023-06-24T20:22:36.236Z"),
      modificationDate: new Date("2023-08-01T19:42:01.658Z"),
      deletionDate: new Date("2024-08-22T11:30:55.573Z"),
      email: "Elva14@hotmail.com",
    },
  ],
  pageInfo: {
    endCursor: "<value>",
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.Comment](../../models/components/comment.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `pageInfo`                                                 | [components.PageInfo](../../models/components/pageinfo.md) | :heavy_check_mark:                                         | Provides information about the pagination of a dataset.    |