# AddAuditorInput

## Example Usage

```typescript
import { AddAuditorInput } from "vanta-auditor-api-sdk/models/components";

let value: AddAuditorInput = {
  email: "auditor@example.com",
  givenName: "Sam",
  familyName: "Auditor",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `email`                     | *string*                    | :heavy_check_mark:          | Email of the new user.      | auditor@example.com         |
| `givenName`                 | *string*                    | :heavy_check_mark:          | First name of the new user. | Sam                         |
| `familyName`                | *string*                    | :heavy_check_mark:          | Last name of the new user.  | Auditor                     |