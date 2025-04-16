# Owner

The control's owner.

## Example Usage

```typescript
import { Owner } from "vanta-auditor-api-sdk/models/components";

let value: Owner = {
  id: "<id>",
  displayName: "Jennie.Wunsch60",
  emailAddress: "Orrin23@yahoo.com",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | Unique identifier for the person.            |
| `displayName`                                | *string*                                     | :heavy_check_mark:                           | Name of the person that is shown in product. |
| `emailAddress`                               | *string*                                     | :heavy_check_mark:                           | Email address of the person.                 |