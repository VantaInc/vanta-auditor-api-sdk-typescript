# AuditorControl

## Example Usage

```typescript
import { AuditorControl } from "vanta-auditor-api-sdk/models/components";

let value: AuditorControl = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  description: "jubilantly modulo gee yuck",
  source: "Vanta",
  domains: [
    "<value 1>",
    "<value 2>",
  ],
  owner: {
    id: "<id>",
    displayName: "Arthur.Borer",
    emailAddress: "Coby_Fisher78@gmail.com",
  },
  customFields: [
    {
      label: "<value>",
      value: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  ],
  framework: "<value>",
  sections: [],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | The control's unique ID.                                                                        |
| `externalId`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | The control's external ID.                                                                      |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | The control's name.                                                                             |
| `description`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | The control's description.                                                                      |
| `source`                                                                                        | [components.ControlSource](../../models/components/controlsource.md)                            | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `domains`                                                                                       | *string*[]                                                                                      | :heavy_check_mark:                                                                              | The security domains that the control belongs to.                                               |
| `owner`                                                                                         | [components.Owner](../../models/components/owner.md)                                            | :heavy_check_mark:                                                                              | The control's owner.                                                                            |
| `role`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The control's GDPR role, if the control is a GDPR control.                                      |
| `customFields`                                                                                  | [components.CustomField](../../models/components/customfield.md)[]                              | :heavy_check_mark:                                                                              | The control's custom field values, if control custom fields is included in your Vanta instance. |
| `framework`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | The report standard framework fulfilled by the control.                                         |
| `sections`                                                                                      | [components.Section](../../models/components/section.md)[]                                      | :heavy_check_mark:                                                                              | Sections of a framework that this control satisfies                                             |