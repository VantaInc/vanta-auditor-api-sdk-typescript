# ListInformationRequestActivityRequest

## Example Usage

```typescript
import { ListInformationRequestActivityRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListInformationRequestActivityRequest = {
  auditId: "<id>",
  requestId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `auditId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | Maximum number of activity entries to return per page.                                        |
| `pageCursor`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Pagination cursor from a previous response. Provide to fetch the next page of activity logs.  |
| `changedSinceDate`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Includes activity logs that have changed since changedSinceDate.                              |