# ListAuditIssuesRequest

## Example Usage

```typescript
import { ListAuditIssuesRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListAuditIssuesRequest = {
  auditId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `auditId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | The audit ID                                                                               |
| `pageSize`                                                                                 | *number*                                                                                   | :heavy_minus_sign:                                                                         | Maximum number of results per page (1-100, default 10)                                     |
| `pageCursor`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | Pagination cursor from previous response                                                   |
| `search`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | Search term for filtering by issue title and description                                   |
| `snapshotIdMatchesAny`                                                                     | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | Filter issues to specific snapshots by snapshot ID                                         |
| `orderBy`                                                                                  | [components.IssueSnapshotItemOrderBy](../../models/components/issuesnapshotitemorderby.md) | :heavy_minus_sign:                                                                         | Field to sort results by. Allowed: "createdAt", "lastModifiedAt". Default: "createdAt"     |
| `orderDirection`                                                                           | [components.OrderDirection](../../models/components/orderdirection.md)                     | :heavy_minus_sign:                                                                         | Sort direction: "asc" or "desc". Default: "desc"                                           |