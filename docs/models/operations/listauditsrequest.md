# ListAuditsRequest

## Example Usage

```typescript
import { ListAuditsRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListAuditsRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pageCursor`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `changedSinceDate`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Includes all audits that have changed since changedSinceDate.                                 |
| `isActiveAudit`                                                                               | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Includes only audits with no audit report uploaded                                            |