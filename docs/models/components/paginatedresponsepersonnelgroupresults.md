# PaginatedResponsePersonnelGroupResults

## Example Usage

```typescript
import { PaginatedResponsePersonnelGroupResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponsePersonnelGroupResults = {
  data: [],
  pageInfo: {
    endCursor: "<value>",
    hasNextPage: false,
    hasPreviousPage: true,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [components.PersonnelGroup](../../models/components/personnelgroup.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pageInfo`                                                               | [components.PageInfo](../../models/components/pageinfo.md)               | :heavy_check_mark:                                                       | Provides information about the pagination of a dataset.                  |