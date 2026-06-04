# VantaTestSnapshotApiRequest

A single API request captured during an API introspection test run.

## Example Usage

```typescript
import { VantaTestSnapshotApiRequest } from "vanta-auditor-api-sdk/models/components";

let value: VantaTestSnapshotApiRequest = {
  id: "<id>",
  resourceType: "<value>",
  resourceTypeDisplayName: "<value>",
  requestMethod: "<value>",
  url: "https://scornful-willow.net/",
  responseCode: 3435.52,
  timestamp: new Date("2025-05-09T02:25:30.185Z"),
  dataTooLarge: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `resourceType`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `resourceTypeDisplayName`                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestMethod`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `responseCode`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dataTooLarge`                                                                                | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |