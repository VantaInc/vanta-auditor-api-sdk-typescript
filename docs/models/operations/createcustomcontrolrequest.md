# CreateCustomControlRequest

## Example Usage

```typescript
import { CreateCustomControlRequest } from "vanta-auditor-api-sdk/models/operations";

let value: CreateCustomControlRequest = {
  auditId: "<id>",
  createCustomControlInput: {
    externalId: "<id>",
    name: "<value>",
    description: "babushka especially boo happily on candid longingly quicker",
    effectiveDate: new Date("2025-09-26T21:38:08.451Z"),
    category: "MAINTENANCE",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `auditId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createCustomControlInput`                                                                 | [components.CreateCustomControlInput](../../models/components/createcustomcontrolinput.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |