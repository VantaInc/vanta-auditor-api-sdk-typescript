# VantaTestSnapshotOutOfScopeResources

Resources excluded from the test at snapshot time, grouped by exclusion
reason.  `testLevel` contains resources the customer disabled for the
test; `frameworkLevel` contains resources scoped out by the framework's
segment configuration.

## Example Usage

```typescript
import { VantaTestSnapshotOutOfScopeResources } from "vanta-auditor-api-sdk/models/components";

let value: VantaTestSnapshotOutOfScopeResources = {
  testLevel: [
    {
      reason: "<value>",
      entities: [],
    },
  ],
  frameworkLevel: [
    {
      frameworkId: "<id>",
      frameworkName: "<value>",
      groupedByReason: [
        {
          reason: "<value>",
          entities: [
            {
              id: "<id>",
              displayName: "Alison64",
            },
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `testLevel`                                                                                                        | [components.VantaTestSnapshotExcludedItemGroup](../../models/components/vantatestsnapshotexcludeditemgroup.md)[]   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `frameworkLevel`                                                                                                   | [components.VantaTestSnapshotFrameworkExclusion](../../models/components/vantatestsnapshotframeworkexclusion.md)[] | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |