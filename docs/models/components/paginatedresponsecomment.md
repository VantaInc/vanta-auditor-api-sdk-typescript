# PaginatedResponseComment

## Example Usage

```typescript
import { PaginatedResponseComment } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseComment = {
  results: {
    data: [
      {
        id: "<id>",
        auditEvidenceId: "<id>",
        text: "<value>",
        creationDate: new Date("2025-05-24T15:49:26.110Z"),
        modificationDate: new Date("2023-07-23T10:58:04.364Z"),
        email: "Marshall_White25@hotmail.com",
      },
    ],
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