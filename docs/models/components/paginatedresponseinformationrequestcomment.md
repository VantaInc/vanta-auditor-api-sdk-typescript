# PaginatedResponseInformationRequestComment

## Example Usage

```typescript
import { PaginatedResponseInformationRequestComment } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseInformationRequestComment = {
  results: {
    data: [
      {
        id: "<id>",
        text: "<value>",
        creationDate: new Date("2024-03-30T20:54:17.094Z"),
        modificationDate: null,
        deletionDate: new Date("2024-09-22T05:40:21.827Z"),
        email: "Gertrude_Kunze@gmail.com",
        authorName: "<value>",
      },
    ],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                                    | [components.PaginatedResponseInformationRequestCommentResults](../../models/components/paginatedresponseinformationrequestcommentresults.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |