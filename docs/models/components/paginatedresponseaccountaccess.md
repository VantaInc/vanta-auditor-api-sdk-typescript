# PaginatedResponseAccountAccess

## Example Usage

```typescript
import { PaginatedResponseAccountAccess } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAccountAccess = {
  results: {
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
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                            | [components.PaginatedResponseAccountAccessResults](../../models/components/paginatedresponseaccountaccessresults.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |