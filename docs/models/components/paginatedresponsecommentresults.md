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
      creationDate: new Date("2023-01-23T15:12:14.003Z"),
      modificationDate: new Date("2025-04-11T04:23:31.598Z"),
      email: "Geraldine_Sipes87@gmail.com",
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