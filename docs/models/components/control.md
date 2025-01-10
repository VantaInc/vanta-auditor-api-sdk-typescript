# Control

## Example Usage

```typescript
import { Control } from "vanta-auditor-api-sdk/models/components";

let value: Control = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  description: "within wiggly huzzah",
  source: "Custom",
  domains: [
    "<value>",
  ],
  owner: {
    id: "<id>",
    displayName: "Isabelle_Cronin44",
    emailAddress: "Delilah90@hotmail.com",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The control's unique ID.                                             |
| `externalId`                                                         | *string*                                                             | :heavy_check_mark:                                                   | The control's external ID.                                           |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | The control's name.                                                  |
| `description`                                                        | *string*                                                             | :heavy_check_mark:                                                   | The control's description.                                           |
| `source`                                                             | [components.ControlSource](../../models/components/controlsource.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `domains`                                                            | *string*[]                                                           | :heavy_check_mark:                                                   | The security domains that the control belongs to.                    |
| `owner`                                                              | [components.ControlOwner](../../models/components/controlowner.md)   | :heavy_check_mark:                                                   | The control's owner.                                                 |
| `role`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | The control's GDPR role, if the control is a GDPR control.           |