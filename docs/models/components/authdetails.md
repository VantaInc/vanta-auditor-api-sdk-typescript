# AuthDetails

The vendor's authentication details.

## Example Usage

```typescript
import { AuthDetails } from "vanta-auditor-api-sdk/models/components";

let value: AuthDetails = {
  passwordMinimumLength: 5983.32,
  passwordRequiresSymbol: null,
  passwordRequiresNumber: true,
  passwordMFA: false,
  method: "ONE_LOGIN",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `passwordMinimumLength`                                                           | *number*                                                                          | :heavy_check_mark:                                                                | Minimum number for chacters required for passwords for this vendor.               |
| `passwordRequiresSymbol`                                                          | *boolean*                                                                         | :heavy_check_mark:                                                                | Whether or not the vendor requires passwords to have a symbol.                    |
| `passwordRequiresNumber`                                                          | *boolean*                                                                         | :heavy_check_mark:                                                                | Whether or not the vendor requires passwords to have a number.                    |
| `passwordMFA`                                                                     | *boolean*                                                                         | :heavy_check_mark:                                                                | Whether or not the vendor requires passwords to have multi factor authentication. |
| `method`                                                                          | [components.Method](../../models/components/method.md)                            | :heavy_check_mark:                                                                | The vendor's authentication method.                                               |