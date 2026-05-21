# PaginatedResponseRiskSnapshot

## Example Usage

```typescript
import { PaginatedResponseRiskSnapshot } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseRiskSnapshot = {
  results: {
    data: [],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: false,
      hasPreviousPage: true,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `results`                                                                                                          | [components.PaginatedResponseRiskSnapshotResults](../../models/components/paginatedresponserisksnapshotresults.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |