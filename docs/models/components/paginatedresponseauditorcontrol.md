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
        description: "although alarmed aboard observe after brush apud",
        source: "Vanta",
        domains: [
          "<value>",
        ],
        owner: {
          id: "<id>",
          displayName: "Zora73",
          emailAddress: "Sheila93@gmail.com",
        },
        customFields: [
          {
            label: "<value>",
            value: [
              "<value>",
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
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                              | [components.PaginatedResponseAuditorControlResults](../../models/components/paginatedresponseauditorcontrolresults.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |