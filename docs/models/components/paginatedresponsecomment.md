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
        creationDate: new Date("2023-03-12T01:14:15.141Z"),
        modificationDate: new Date("2023-06-23T12:10:47.464Z"),
        deletionDate: new Date("2025-05-27T03:32:23.853Z"),
        email: "Stanford_Toy24@hotmail.com",
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