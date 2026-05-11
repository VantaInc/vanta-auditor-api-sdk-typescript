# PaginatedResponseInformationRequestResults

## Example Usage

```typescript
import { PaginatedResponseInformationRequestResults } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseInformationRequestResults = {
  data: [
    {
      id: "<id>",
      uniqueId: "<id>",
      additionalControlIds: [
        "<value 1>",
        "<value 2>",
      ],
      approvalStatus: "AUDITOR_FLAGGED",
      cadence: "MONTHLY",
      frameworkCodes: [],
      description:
        "accomplished bleakly beautifully exhaust left amnesty unless hmph",
      dueDate: new Date("2025-07-07T09:57:50.890Z"),
      evidenceCaptureDate: new Date("2024-05-08T04:56:52.649Z"),
      requestId: "<id>",
      requestType: "SAMPLE",
      title: "<value>",
      creationDate: new Date("2025-12-19T20:40:42.754Z"),
      modificationDate: new Date("2025-11-07T04:24:53.555Z"),
      deletionDate: new Date("2025-07-05T12:28:13.771Z"),
      ownerAssignment: {
        displayName: "Francisca.Brakus",
        id: "<id>",
        type: "team",
      },
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

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [components.InformationRequest](../../models/components/informationrequest.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pageInfo`                                                                       | [components.PageInfo](../../models/components/pageinfo.md)                       | :heavy_check_mark:                                                               | Provides information about the pagination of a dataset.                          |