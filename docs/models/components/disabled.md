# Disabled

If the task is disabled, the reason and date when it was disabled.

## Example Usage

```typescript
import { Disabled } from "vanta-auditor-api-sdk/models/components";

let value: Disabled = {
  date: new Date("2024-08-23T02:53:22.193Z"),
  reason: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |