# PaginatedResponseVendor

## Example Usage

```typescript
import { PaginatedResponseVendor } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseVendor = {
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

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `results`                                                                                              | [components.PaginatedResponseVendorResults](../../models/components/paginatedresponsevendorresults.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |