# PaginatedResponsePersonnelGroup

## Example Usage

```typescript
import { PaginatedResponsePersonnelGroup } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponsePersonnelGroup = {
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                              | [components.PaginatedResponsePersonnelGroupResults](../../models/components/paginatedresponsepersonnelgroupresults.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |