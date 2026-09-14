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
      linkedControlIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      approvalStatus: "NEEDS_EVIDENCE",
      cadence: "ANNUALLY",
      frameworkCodes: [],
      segmentIds: [
        "<value 1>",
        "<value 2>",
      ],
      description:
        "outrun recklessly instead frenetically circa pretend tremendously",
      dueDate: new Date("2025-02-12T19:49:55.914Z"),
      evidenceCaptureDate: new Date("2024-01-16T06:05:01.227Z"),
      requestId: "<id>",
      requestType: "SAMPLE",
      title: "<value>",
      creationDate: new Date("2025-07-07T09:57:50.890Z"),
      modificationDate: new Date("2026-07-01T13:35:37.058Z"),
      deletionDate: new Date("2026-03-09T05:54:54.921Z"),
      ownerAssignment: {
        displayName: "Lexie_Labadie-Strosin36",
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