# PaginatedResponseAuditIntegration

## Example Usage

```typescript
import { PaginatedResponseAuditIntegration } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAuditIntegration = {
  results: {
    data: [],
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                  | [components.PaginatedResponseAuditIntegrationResults](../../models/components/paginatedresponseauditintegrationresults.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |