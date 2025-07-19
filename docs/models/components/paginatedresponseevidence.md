# PaginatedResponseEvidence

## Example Usage

```typescript
import { PaginatedResponseEvidence } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseEvidence = {
  results: {
    data: [],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                  | [components.PaginatedResponseEvidenceResults](../../models/components/paginatedresponseevidenceresults.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |