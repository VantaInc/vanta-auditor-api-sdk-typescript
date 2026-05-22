# MonitoredComputerOwner

The name, unique identifier, and email address of the computer's owner.

## Example Usage

```typescript
import { MonitoredComputerOwner } from "vanta-auditor-api-sdk/models/components";

let value: MonitoredComputerOwner = {
  id: "<id>",
  displayName: "Brandi.Johnson",
  emailAddress: "Ernesto.Streich14@hotmail.com",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | Unique identifier for the person.            |
| `displayName`                                | *string*                                     | :heavy_check_mark:                           | Name of the person that is shown in product. |
| `emailAddress`                               | *string*                                     | :heavy_check_mark:                           | Email address of the person.                 |