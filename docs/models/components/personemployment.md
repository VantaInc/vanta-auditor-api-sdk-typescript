# PersonEmployment

## Example Usage

```typescript
import { PersonEmployment } from "vanta-auditor-api-sdk/models/components";

let value: PersonEmployment = {
  endDate: {
    type: "VANTA",
  },
  startDate: {
    type: "SCIM",
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `endDate`                               | *components.PersonInfoSource*           | :heavy_check_mark:                      | The source of the person's information. |
| `startDate`                             | *components.PersonInfoSource*           | :heavy_check_mark:                      | The source of the person's information. |