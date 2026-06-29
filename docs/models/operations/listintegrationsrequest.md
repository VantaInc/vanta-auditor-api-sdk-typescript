# ListIntegrationsRequest

## Example Usage

```typescript
import { ListIntegrationsRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListIntegrationsRequest = {
  auditId: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `auditId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The audit ID                                                                                               |
| `pageSize`                                                                                                 | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Maximum number of results per page (1-100, default 10)                                                     |
| `pageCursor`                                                                                               | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Pagination cursor from previous response                                                                   |
| `search`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Search term for filtering by integration name                                                              |
| `tagsMatchesAny`                                                                                           | [components.AuditIntegrationCategory](../../models/components/auditintegrationcategory.md)[]               | :heavy_minus_sign:                                                                                         | Filter integrations by tag values                                                                          |
| `categoriesMatchesAny`                                                                                     | [components.AuditIntegrationServiceCategory](../../models/components/auditintegrationservicecategory.md)[] | :heavy_minus_sign:                                                                                         | Filter integrations by category values                                                                     |