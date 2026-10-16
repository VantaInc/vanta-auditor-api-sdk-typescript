# PaginatedResponseCodeChange

## Example Usage

```typescript
import { PaginatedResponseCodeChange } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseCodeChange = {
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                      | [components.PaginatedResponseCodeChangeResults](../../models/components/paginatedresponsecodechangeresults.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |