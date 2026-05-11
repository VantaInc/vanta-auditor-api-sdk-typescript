# FrameworkCodes

Framework codes response resource

## Example Usage

```typescript
import { FrameworkCodes } from "vanta-auditor-api-sdk/models/components";

let value: FrameworkCodes = {
  frameworkCodes: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `frameworkCodes`                                                                                                                                                                 | *string*[]                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                               | Array of valid framework codes for the audit's framework (e.g., "CC6.1", "CC6.2").<br/>These represent the different framework sections available for creating information requests. |