# ListVendorsRequest

## Example Usage

```typescript
import { ListVendorsRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListVendorsRequest = {
  auditId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `auditId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The audit ID                                                                         |
| `pageSize`                                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | Maximum number of results per page (1-100, default 10)                               |
| `pageCursor`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | Pagination cursor from previous response                                             |
| `search`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Search term for filtering by vendor name                                             |
| `vendorStatusesMatchesAny`                                                           | [components.AuditVendorStatus](../../models/components/auditvendorstatus.md)[]       | :heavy_minus_sign:                                                                   | Filter vendors by status values                                                      |
| `inherentRiskMatchesAny`                                                             | [components.AuditVendorRiskLevel](../../models/components/auditvendorrisklevel.md)[] | :heavy_minus_sign:                                                                   | Filter vendors by inherent risk level values                                         |
| `orderBy`                                                                            | [components.VendorOrderBy](../../models/components/vendororderby.md)                 | :heavy_minus_sign:                                                                   | Field to sort results by. Allowed: "name", "inherentRisk". Default: "name"           |
| `orderDirection`                                                                     | [components.OrderDirection](../../models/components/orderdirection.md)               | :heavy_minus_sign:                                                                   | Sort direction: "asc" or "desc". Default: "asc"                                      |