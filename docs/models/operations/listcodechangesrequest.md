# ListCodeChangesRequest

## Example Usage

```typescript
import { ListCodeChangesRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListCodeChangesRequest = {
  auditId: "<id>",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `auditId`                                                                                               | *string*                                                                                                | :heavy_check_mark:                                                                                      | The audit ID                                                                                            |
| `pageSize`                                                                                              | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Maximum number of results per page (1-100, default 10)                                                  |
| `pageCursor`                                                                                            | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Pagination cursor from previous response                                                                |
| `search`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Search term for filtering by code change title or repository name                                       |
| `sourcesMatchesAny`                                                                                     | [components.ApiCodeChangeSource](../../models/components/apicodechangesource.md)[]                      | :heavy_minus_sign:                                                                                      | Filter code changes by version control source (accepted values: github, gitlab, bitbucket, azuredevops) |
| `startDate`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | Filter code changes closed on or after this date (ISO 8601)                                             |
| `endDate`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_minus_sign:                                                                                      | Filter code changes closed on or before this date (ISO 8601)                                            |