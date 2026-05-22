# OperatingSystem

The computer's operating system name and version.

## Example Usage

```typescript
import { OperatingSystem } from "vanta-auditor-api-sdk/models/components";

let value: OperatingSystem = {
  type: "macOS",
  version: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `type`                                                                              | [components.OperatingSystemType](../../models/components/operatingsystemtype.md)    | :heavy_check_mark:                                                                  | The possible types of the operating system. One of `mac_OS`, `linux`, or `windows`. |
| `version`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | The version of the operating system.                                                |