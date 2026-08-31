# AuditSegmentFramework

The framework reached through a segment.

## Example Usage

```typescript
import { AuditSegmentFramework } from "vanta-auditor-api-sdk/models/components";

let value: AuditSegmentFramework = {
  id: "<id>",
  displayName: "Callie70",
  shortName: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The stable identifier of the framework (for example `soc2`). |
| `displayName`                                                | *string*                                                     | :heavy_check_mark:                                           | The human-readable framework name.                           |
| `shortName`                                                  | *string*                                                     | :heavy_check_mark:                                           | The short framework name used in compact UI.                 |