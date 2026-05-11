# PaginatedIssueSnapshotItemsResponseResults

## Example Usage

```typescript
import { PaginatedIssueSnapshotItemsResponseResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedIssueSnapshotItemsResponseResults = {
  data: [
    {
      id: "5f2c939a52855e725c8d5824",
      title: "User accounts with weak passwords",
      description:
        "The following user accounts have passwords that do not meet the company's password policy: [list of accounts]. Weak passwords increase the risk of unauthorized access to systems and data.",
      readableIssueId: "<id>",
      issueId: "5f2c939a52855e725c8d5825",
      snapshotId: "5f2c939a52855e725c8d5823",
      dueDate: new Date("2023-12-31T23:59:59.000Z"),
      lastModifiedAt: new Date("2024-06-15T10:30:00.000Z"),
      createdAt: new Date("2024-06-01T09:00:00.000Z"),
      detectedAt: new Date("2024-05-30T14:45:00.000Z"),
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [components.IssueSnapshotItem](../../models/components/issuesnapshotitem.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `pageInfo`                                                                     | [components.PageInfo](../../models/components/pageinfo.md)                     | :heavy_check_mark:                                                             | Provides information about the pagination of a dataset.                        |