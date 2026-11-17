# AuditorControlOwner

The control's owner.

## Example Usage

```typescript
import { AuditorControlOwner } from "vanta-auditor-api-sdk/models/components";

let value: AuditorControlOwner = {
  id: "<id>",
  displayName: "Chase.Gleichner",
  emailAddress: "Caleigh17@hotmail.com",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | Unique identifier for the person.            |
| `displayName`                                | *string*                                     | :heavy_check_mark:                           | Name of the person that is shown in product. |
| `emailAddress`                               | *string*                                     | :heavy_check_mark:                           | Email address of the person.                 |