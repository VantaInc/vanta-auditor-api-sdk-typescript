# SlaRemediation

SLA remediation policy attached to the test, or null when no SLA is set.

## Example Usage

```typescript
import { SlaRemediation } from "vanta-auditor-api-sdk/models/components";

let value: SlaRemediation = {
  id: "<id>",
  settings: {
    numericValue: 8946.49,
    unit: "becquerel",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `settings`                                                 | [components.Settings](../../models/components/settings.md) | :heavy_check_mark:                                         | N/A                                                        |