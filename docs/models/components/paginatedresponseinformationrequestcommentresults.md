# PaginatedResponseInformationRequestCommentResults

## Example Usage

```typescript
import { PaginatedResponseInformationRequestCommentResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseInformationRequestCommentResults = {
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
    hasNextPage: false,
    hasPreviousPage: true,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [components.InformationRequestComment](../../models/components/informationrequestcomment.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pageInfo`                                                                                     | [components.PageInfo](../../models/components/pageinfo.md)                                     | :heavy_check_mark:                                                                             | Provides information about the pagination of a dataset.                                        |