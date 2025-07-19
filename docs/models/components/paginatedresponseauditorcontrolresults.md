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
      description: "opposite round mid promptly",
      source: "Vanta",
      domains: [
        "<value 1>",
        "<value 2>",
      ],
      owner: {
        id: "<id>",
        displayName: "Arthur.Borer",
        emailAddress: "Coby_Fisher78@gmail.com",
      },
      customFields: [
        {
          label: "<value>",
          value: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
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