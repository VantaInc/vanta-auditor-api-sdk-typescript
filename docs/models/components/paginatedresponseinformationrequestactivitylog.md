# PaginatedResponseInformationRequestActivityLog

## Example Usage

```typescript
import { PaginatedResponseInformationRequestActivityLog } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseInformationRequestActivityLog = {
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

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                                            | [components.PaginatedResponseInformationRequestActivityLogResults](../../models/components/paginatedresponseinformationrequestactivitylogresults.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |