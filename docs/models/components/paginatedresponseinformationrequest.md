# PaginatedResponseInformationRequest

## Example Usage

```typescript
import { PaginatedResponseInformationRequest } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseInformationRequest = {
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `results`                                                                                                                      | [components.PaginatedResponseInformationRequestResults](../../models/components/paginatedresponseinformationrequestresults.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |