# PaginatedResponseAuditVendorResults

## Example Usage

```typescript
import { PaginatedResponseAuditVendorResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAuditVendorResults = {
  data: [],
  pageInfo: {
    endCursor: "<value>",
    hasNextPage: true,
    hasPreviousPage: false,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [components.AuditVendor](../../models/components/auditvendor.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `pageInfo`                                                         | [components.PageInfo](../../models/components/pageinfo.md)         | :heavy_check_mark:                                                 | Provides information about the pagination of a dataset.            |