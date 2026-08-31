# PaginatedResponseAuditVendor

## Example Usage

```typescript
import { PaginatedResponseAuditVendor } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAuditVendor = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                        | [components.PaginatedResponseAuditVendorResults](../../models/components/paginatedresponseauditvendorresults.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |