# PaginatedResponseCodeChangeResults

## Example Usage

```typescript
import { PaginatedResponseCodeChangeResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseCodeChangeResults = {
  data: [
    {
      id: "5f2c939a52855e725c8d5824",
      codeChange: "fix-auth-bug",
      identifier: "101",
      service: "github",
      repository: "vanta/obsidian",
      openedAt: new Date("2025-01-25T14:30:00.000Z"),
      closedAt: new Date("2025-03-25T14:30:00.000Z"),
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `data`                                                           | [components.CodeChange](../../models/components/codechange.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pageInfo`                                                       | [components.PageInfo](../../models/components/pageinfo.md)       | :heavy_check_mark:                                               | Provides information about the pagination of a dataset.          |