# PaginatedResponseVulnerableAsset

## Example Usage

```typescript
import { PaginatedResponseVulnerableAsset } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseVulnerableAsset = {
  results: {
    data: [
      {
        id: "<id>",
        name: "<value>",
        assetType: "SERVERLESS_FUNCTION",
        hasBeenScanned: true,
        imageScanTag: "<value>",
        scanners: [],
      },
    ],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `results`                                                                                                                | [components.PaginatedResponseVulnerableAssetResults](../../models/components/paginatedresponsevulnerableassetresults.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |