# BusinessUnit

The business unit this program segment is scoped to, or null when the
segment is not BU-scoped or the BU cannot be resolved.

## Example Usage

```typescript
import { BusinessUnit } from "vanta-auditor-api-sdk/models/components";

let value: BusinessUnit = {
  id: "<id>",
  displayName: "Zachariah.Ullrich3",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The unique identifier of the associated business unit or information system.   |
| `displayName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | The human-readable name of the associated business unit or information system. |