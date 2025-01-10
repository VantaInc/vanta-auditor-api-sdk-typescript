# PaginatedResponseAuditorControlResults

## Example Usage

```typescript
import { PaginatedResponseAuditorControlResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAuditorControlResults = {
  data: [
    {
      id: "<id>",
      externalId: "<id>",
      name: "<value>",
      description: "consequently bouncy abaft",
      source: "Custom",
      domains: [
        "<value>",
      ],
      owner: {
        id: "<id>",
        displayName: "Marcia_Grady",
        emailAddress: "Selina94@hotmail.com",
      },
      framework: "<value>",
    },
  ],
  pageInfo: {
    endCursor: "<value>",
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [components.AuditorControl](../../models/components/auditorcontrol.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pageInfo`                                                               | [components.PageInfo](../../models/components/pageinfo.md)               | :heavy_check_mark:                                                       | Provides information about the pagination of a dataset.                  |