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
      segmentIds: [],
      description:
        "questioningly longingly yieldingly around baptise vice yuck whoever of",
      dueDate: new Date("2025-07-05T12:28:13.771Z"),
      evidenceCaptureDate: new Date("2026-06-04T08:15:22.767Z"),
      requestId: "<id>",
      requestType: "POINT_IN_TIME",
      title: "<value>",
      creationDate: new Date("2024-04-22T08:51:04.799Z"),
      modificationDate: new Date("2024-04-29T10:43:52.017Z"),
      deletionDate: new Date("2025-12-08T04:09:50.766Z"),
      ownerAssignment: {
        displayName: "Rodrick_Purdy1",
        id: "<id>",
        type: "team",
      },
    },
  ],
  pageInfo: {
    endCursor: "<value>",
    hasNextPage: true,
    hasPreviousPage: false,
    startCursor: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [components.InformationRequest](../../models/components/informationrequest.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pageInfo`                                                                       | [components.PageInfo](../../models/components/pageinfo.md)                       | :heavy_check_mark:                                                               | Provides information about the pagination of a dataset.                          |