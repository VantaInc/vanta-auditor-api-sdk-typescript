# Auditor

## Example Usage

```typescript
import { Auditor } from "vanta-auditor-api-sdk/models/components";

let value: Auditor = {
  id: "<id>",
  organizationId: "<id>",
  email: "Daren32@yahoo.com",
  givenName: "<value>",
  familyName: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `organizationId`                            | *string*                                    | :heavy_check_mark:                          | The unique identifier for the organization. |
| `email`                                     | *string*                                    | :heavy_check_mark:                          | The email address of the auditor.           |
| `givenName`                                 | *string*                                    | :heavy_check_mark:                          | The given name (first name) of the auditor. |
| `familyName`                                | *string*                                    | :heavy_check_mark:                          | The family name (last name) of the auditor. |