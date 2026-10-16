# PaginatedResponseAccountAccessResults

## Example Usage

```typescript
import { PaginatedResponseAccountAccessResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAccountAccessResults = {
  data: [
    {
      id: "5f2c939a52855e725c8d5824",
      accountName: "john.doe@example.com",
      owner: "John Doe",
      role: [
        "Admin",
      ],
      mfa: true,
      createdDate: new Date("2024-01-15T10:30:00.000Z"),
      deactivatedDate: new Date("2024-06-20T08:00:00.000Z"),
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `data`                                                                 | [components.AccountAccess](../../models/components/accountaccess.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pageInfo`                                                             | [components.PageInfo](../../models/components/pageinfo.md)             | :heavy_check_mark:                                                     | Provides information about the pagination of a dataset.                |