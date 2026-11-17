# PaginatedResponseInformationRequestAuditorFileResults

## Example Usage

```typescript
import { PaginatedResponseInformationRequestAuditorFileResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseInformationRequestAuditorFileResults = {
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
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                 | [components.InformationRequestAuditorFile](../../models/components/informationrequestauditorfile.md)[] | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pageInfo`                                                                                             | [components.PageInfo](../../models/components/pageinfo.md)                                             | :heavy_check_mark:                                                                                     | Provides information about the pagination of a dataset.                                                |