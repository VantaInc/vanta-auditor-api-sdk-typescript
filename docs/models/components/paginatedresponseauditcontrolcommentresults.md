# PaginatedResponseAuditControlCommentResults

## Example Usage

```typescript
import { PaginatedResponseAuditControlCommentResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAuditControlCommentResults = {
  data: [
    {
      id: "<id>",
      text: "<value>",
      creationDate: new Date("2026-10-13T03:53:50.497Z"),
      modificationDate: null,
      deletionDate: new Date("2025-10-24T18:54:34.186Z"),
      email: null,
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [components.AuditControlComment](../../models/components/auditcontrolcomment.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `pageInfo`                                                                         | [components.PageInfo](../../models/components/pageinfo.md)                         | :heavy_check_mark:                                                                 | Provides information about the pagination of a dataset.                            |