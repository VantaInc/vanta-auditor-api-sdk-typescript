# CreateCustomControlRequest

## Example Usage

```typescript
import { CreateCustomControlRequest } from "vanta-auditor-api-sdk/models/operations";

let value: CreateCustomControlRequest = {
  auditId: "<id>",
  createCustomControlInput: {
    externalId: "<id>",
    name: "<value>",
    description: "hmph hospitalization uselessly",
    effectiveDate: new Date("2024-03-06T06:07:45.882Z"),
    category: "ADMINISTRATIVE",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `auditId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createCustomControlInput`                                                                 | [components.CreateCustomControlInput](../../models/components/createcustomcontrolinput.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |