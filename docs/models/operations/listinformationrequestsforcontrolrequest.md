# ListInformationRequestsForControlRequest

## Example Usage

```typescript
import { ListInformationRequestsForControlRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListInformationRequestsForControlRequest = {
  auditId: "<id>",
  controlId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `auditId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `controlId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pageSize`                                                                             | *number*                                                                               | :heavy_minus_sign:                                                                     | Maximum number of information requests to return per page.                             |
| `pageCursor`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | Pagination cursor from a previous response. Provide to fetch the next page of results. |