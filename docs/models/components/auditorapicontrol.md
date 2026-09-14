# AuditorApiControl

## Example Usage

```typescript
import { AuditorApiControl } from "vanta-auditor-api-sdk/models/components";

let value: AuditorApiControl = {
  id: "<id>",
  externalId: "<id>",
  name: "<value>",
  description: "possible near hence deflate mystify louse for worst apud gah",
  source: "Vanta",
  domains: [
    "<value 1>",
    "<value 2>",
  ],
  owner: {
    id: "<id>",
    displayName: "Maymie46",
    emailAddress: "Asa79@yahoo.com",
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
  creationDate: new Date("2026-06-21T16:06:33.791Z"),
  modificationDate: new Date("2025-08-03T15:16:55.426Z"),
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
| `owner`                                                                                         | [components.AuditorApiControlOwner](../../models/components/auditorapicontrolowner.md)          | :heavy_check_mark:                                                                              | The control's owner.                                                                            |
| `role`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The control's GDPR role, if the control is a GDPR control.                                      |
| `customFields`                                                                                  | [components.CustomField](../../models/components/customfield.md)[]                              | :heavy_check_mark:                                                                              | The control's custom field values, if control custom fields is included in your Vanta instance. |
| `creationDate`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | When the control was created. Returns null for Vanta library controls.                          |
| `modificationDate`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_check_mark:                                                                              | When the control was last modified. Returns null for Vanta library controls.                    |