# PaginatedResponseAuditRiskResults

## Example Usage

```typescript
import { PaginatedResponseAuditRiskResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAuditRiskResults = {
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

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `data`                                                         | [components.AuditRisk](../../models/components/auditrisk.md)[] | :heavy_check_mark:                                             | N/A                                                            |
| `pageInfo`                                                     | [components.PageInfo](../../models/components/pageinfo.md)     | :heavy_check_mark:                                             | Provides information about the pagination of a dataset.        |