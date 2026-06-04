# VantaTestSnapshotFrameworkExclusion

## Example Usage

```typescript
import { VantaTestSnapshotFrameworkExclusion } from "vanta-auditor-api-sdk/models/components";

let value: VantaTestSnapshotFrameworkExclusion = {
  frameworkId: "<id>",
  frameworkName: "<value>",
  groupedByReason: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `frameworkId`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `frameworkName`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `groupedByReason`                                                                                                | [components.VantaTestSnapshotExcludedItemGroup](../../models/components/vantatestsnapshotexcludeditemgroup.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |