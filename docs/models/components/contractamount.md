# ContractAmount

The contract amount for the vendor.

## Example Usage

```typescript
import { ContractAmount } from "vanta-auditor-api-sdk/models/components";

let value: ContractAmount = {
  amount: 3623.47,
  currency: "INR",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `amount`                                                           | *number*                                                           | :heavy_check_mark:                                                 | The amount of the contract.                                        |
| `currency`                                                         | [components.CurrencyCode](../../models/components/currencycode.md) | :heavy_check_mark:                                                 | N/A                                                                |