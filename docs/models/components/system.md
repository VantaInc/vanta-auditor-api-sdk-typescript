# System

The information system this system segment is scoped to, or null on
program segments.

## Example Usage

```typescript
import { System } from "vanta-auditor-api-sdk/models/components";

let value: System = {
  id: "<id>",
  displayName: "Letitia48",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The unique identifier of the associated business unit or information system.   |
| `displayName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | The human-readable name of the associated business unit or information system. |