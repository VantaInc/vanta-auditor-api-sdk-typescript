# Name

## Example Usage

```typescript
import { Name } from "vanta-auditor-api-sdk/models/components";

let value: Name = {
  first: "<value>",
  last: "<value>",
  display: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `first`                                   | *string*                                  | :heavy_check_mark:                        | The person's first (given) name.          |
| `last`                                    | *string*                                  | :heavy_check_mark:                        | The person's last (family) name.          |
| `display`                                 | *string*                                  | :heavy_check_mark:                        | The person's display name, used in Vanta. |