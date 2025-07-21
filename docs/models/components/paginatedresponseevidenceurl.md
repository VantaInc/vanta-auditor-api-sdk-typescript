# PaginatedResponseEvidenceUrl

## Example Usage

```typescript
import { PaginatedResponseEvidenceUrl } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseEvidenceUrl = {
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                        | [components.PaginatedResponseEvidenceUrlResults](../../models/components/paginatedresponseevidenceurlresults.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |