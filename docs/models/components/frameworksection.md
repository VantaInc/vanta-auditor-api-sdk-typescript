# FrameworkSection

## Example Usage

```typescript
import { FrameworkSection } from "vanta-auditor-api-sdk/models/components";

let value: FrameworkSection = {
  frameworkId: "<id>",
  sectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `frameworkId`                                                                                                                                     | *components.FrameworkSectionFrameworkId*                                                                                                          | :heavy_check_mark:                                                                                                                                | The framework's id, such as `soc2` or the id of a custom framework. The `FrameworkId` enum values are deprecated aliases that are still accepted. |
| `sectionId`                                                                                                                                       | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | N/A                                                                                                                                               |