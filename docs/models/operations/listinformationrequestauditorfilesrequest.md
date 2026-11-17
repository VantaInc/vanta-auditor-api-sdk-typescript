# ListInformationRequestAuditorFilesRequest

## Example Usage

```typescript
import { ListInformationRequestAuditorFilesRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListInformationRequestAuditorFilesRequest = {
  auditId: "<id>",
  requestId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `auditId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `requestId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pageSize`                                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | Maximum number of files to return per page.                                          |
| `pageCursor`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | Pagination cursor from a previous response. Provide to fetch the next page of files. |