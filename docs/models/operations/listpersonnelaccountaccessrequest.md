# ListPersonnelAccountAccessRequest

## Example Usage

```typescript
import { ListPersonnelAccountAccessRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListPersonnelAccountAccessRequest = {
  auditId: "<id>",
  serviceId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `auditId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | The audit ID                                                                     |
| `serviceId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The service ID from the /services endpoint                                       |
| `pageSize`                                                                       | *number*                                                                         | :heavy_minus_sign:                                                               | Maximum number of results per page (1-100, default 10)                           |
| `pageCursor`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | Pagination cursor from previous response                                         |
| `search`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | Search term for filtering by account name or email                               |
| `status`                                                                         | [components.AccountAccessStatus](../../models/components/accountaccessstatus.md) | :heavy_minus_sign:                                                               | Filter by account status                                                         |