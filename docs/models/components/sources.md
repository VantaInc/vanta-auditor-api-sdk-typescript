# Sources

The sources of the person's information.

## Example Usage

```typescript
import { Sources } from "vanta-auditor-api-sdk/models/components";

let value: Sources = {
  employment: {
    endDate: {
      integrationId: "<id>",
      resourceId: "<id>",
      type: "INTEGRATION",
    },
    startDate: {
      type: "SCIM",
    },
  },
  emailAddress: {
    type: "SCIM",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `employment`                                                               | [components.PersonEmployment](../../models/components/personemployment.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `emailAddress`                                                             | *components.PersonInfoSource*                                              | :heavy_check_mark:                                                         | The source of the person's information.                                    |