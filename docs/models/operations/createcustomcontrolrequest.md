# CreateCustomControlRequest

## Example Usage

```typescript
import { CreateCustomControlRequest } from "vanta-auditor-api-sdk/models/operations";

let value: CreateCustomControlRequest = {
  auditId: "<id>",
  createCustomControlInput: {
    externalId: "<id>",
    name: "<value>",
    description: "yahoo accentuate from despite supplier",
    effectiveDate: new Date("2024-11-28T00:29:43.175Z"),
    category: "SECURE_ENGINEERING_&_ARCHITECTURE",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `auditId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createCustomControlInput`                                                                 | [components.CreateCustomControlInput](../../models/components/createcustomcontrolinput.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |