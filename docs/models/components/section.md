# Section

## Example Usage

```typescript
import { Section } from "vanta-auditor-api-sdk/models/components";

let value: Section = {
  name: "<value>",
  framework: "<value>",
  principle: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | The section name                                             |
| `framework`                                                  | *string*                                                     | :heavy_check_mark:                                           | The section framework                                        |
| `principle`                                                  | [components.Principle](../../models/components/principle.md) | :heavy_check_mark:                                           | The principle that groups this section, if any.              |