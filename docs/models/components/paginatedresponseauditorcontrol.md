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
        description:
          "incidentally challenge vol department brightly resort duh redact indeed",
        source: "Vanta",
        domains: [
          "<value>",
        ],
        owner: {
          id: "<id>",
          displayName: "Jaida.Schmidt51",
          emailAddress: "Vicenta.Barton@yahoo.com",
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
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                              | [components.PaginatedResponseAuditorControlResults](../../models/components/paginatedresponseauditorcontrolresults.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |