# ListAccountAccessServicesRequest

## Example Usage

```typescript
import { ListAccountAccessServicesRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListAccountAccessServicesRequest = {
  auditId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `auditId`                                              | *string*                                               | :heavy_check_mark:                                     | The audit ID                                           |
| `pageSize`                                             | *number*                                               | :heavy_minus_sign:                                     | Maximum number of results per page (1-100, default 10) |
| `pageCursor`                                           | *string*                                               | :heavy_minus_sign:                                     | Pagination cursor from previous response               |