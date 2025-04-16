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
      description: "since tapioca by broadcast fully whoa twin outside",
      source: "Custom",
      domains: [
        "<value>",
      ],
      owner: {
        id: "<id>",
        displayName: "Jeffery.Mante6",
        emailAddress: "Blaise_Christiansen59@yahoo.com",
      },
      customFields: [
        {
          label: "<value>",
          value: "<value>",
        },
      ],
      framework: "<value>",
      sections: [
        {
          name: "<value>",
          framework: "<value>",
        },
      ],
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