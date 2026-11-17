# PaginatedResponseInformationRequestAuditorFile

## Example Usage

```typescript
import { PaginatedResponseInformationRequestAuditorFile } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseInformationRequestAuditorFile = {
  results: {
    data: [
      {
        id: "<id>",
        filename: "example.file",
        mimeType: "<value>",
        url: "https://burly-vibraphone.info",
        uploadedBy: {
          email: "Ike.Luettgen@yahoo.com",
          name: "<value>",
        },
        uploadedDate: new Date("2024-03-07T04:34:58.513Z"),
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

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                                            | [components.PaginatedResponseInformationRequestAuditorFileResults](../../models/components/paginatedresponseinformationrequestauditorfileresults.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |