# FrameworkCodesByFramework

## Example Usage

```typescript
import { FrameworkCodesByFramework } from "vanta-auditor-api-sdk/models/components";

let value: FrameworkCodesByFramework = {
  framework: "<value>",
  codes: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `framework`                                                   | *string*                                                      | :heavy_check_mark:                                            | Display name of the in-scope framework these codes belong to. |
| `codes`                                                       | *string*[]                                                    | :heavy_check_mark:                                            | Valid codes for this framework, sorted.                       |