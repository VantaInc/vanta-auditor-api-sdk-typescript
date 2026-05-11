# PaginatedResponseAuditorControl

## Example Usage

```typescript
import { PaginatedResponseAuditorControl } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAuditorControl = {
  results: {
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
        creationDate: new Date("2025-11-15T21:47:21.999Z"),
        modificationDate: new Date("2024-01-04T15:06:44.365Z"),
        framework: "<value>",
        sections: [
          {
            name: "<value>",
            framework: "<value>",
            principle: {
              id: "<id>",
              name: "<value>",
            },
          },
        ],
      },
    ],
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
| `results`                                                                                                              | [components.PaginatedResponseAuditorControlResults](../../models/components/paginatedresponseauditorcontrolresults.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |