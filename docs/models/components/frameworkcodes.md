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
  codesByFramework: [],
};
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`frameworkCodes`~~                                                                                                                                                                                             | *string*[]                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                               | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Valid framework codes for this audit.                                           |
| `codesByFramework`                                                                                                                                                                                               | [components.FrameworkCodesByFramework](../../models/components/frameworkcodesbyframework.md)[]                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                               | Valid codes grouped by each distinct in-scope framework. A code that exists<br/>on two frameworks appears in both groups. Two segments that share a<br/>framework contribute one group. `framework` is the display name. |