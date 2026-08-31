# PaginatedResponseMonitoredComputer

## Example Usage

```typescript
import { PaginatedResponseMonitoredComputer } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseMonitoredComputer = {
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                    | [components.PaginatedResponseMonitoredComputerResults](../../models/components/paginatedresponsemonitoredcomputerresults.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |