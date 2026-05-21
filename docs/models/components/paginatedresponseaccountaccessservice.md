# PaginatedResponseAccountAccessService

## Example Usage

```typescript
import { PaginatedResponseAccountAccessService } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAccountAccessService = {
  results: {
    data: [
      {
        id: "credential_abc123",
        credentialDisplayName: "Okta - Production",
        service: "okta",
        subAccountId: "sub_account_456",
      },
    ],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: false,
      hasPreviousPage: true,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `results`                                                                                                                          | [components.PaginatedResponseAccountAccessServiceResults](../../models/components/paginatedresponseaccountaccessserviceresults.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |