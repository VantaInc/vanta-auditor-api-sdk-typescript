# ListPersonnelPeopleRequest

## Example Usage

```typescript
import { ListPersonnelPeopleRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListPersonnelPeopleRequest = {
  auditId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `auditId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | The audit ID                                                                           |
| `pageSize`                                                                             | *number*                                                                               | :heavy_minus_sign:                                                                     | Maximum number of results per page (1-100, default 10)                                 |
| `pageCursor`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | Pagination cursor from previous response                                               |
| `search`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Search term for filtering by name or email                                             |
| `status`                                                                               | [components.PeopleEmploymentStatus](../../models/components/peopleemploymentstatus.md) | :heavy_minus_sign:                                                                     | Employment status filter                                                               |
| `groupsMatchesAny`                                                                     | *string*[]                                                                             | :heavy_minus_sign:                                                                     | Filter people by group IDs                                                             |
| `orderBy`                                                                              | [components.PeopleOrderBy](../../models/components/peopleorderby.md)                   | :heavy_minus_sign:                                                                     | Field to sort results by. Allowed: "name", "employmentStatus". Default: "name"         |
| `orderDirection`                                                                       | [components.OrderDirection](../../models/components/orderdirection.md)                 | :heavy_minus_sign:                                                                     | Sort direction: "asc" or "desc". Default: "asc"                                        |