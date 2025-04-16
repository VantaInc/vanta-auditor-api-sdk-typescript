# AddAuditorInput

## Example Usage

```typescript
import { AddAuditorInput } from "vanta-auditor-api-sdk/models/components";

let value: AddAuditorInput = {
  email: "Jaqueline.Hermann67@gmail.com",
  givenName: "<value>",
  familyName: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `email`                     | *string*                    | :heavy_check_mark:          | Email of the new user.      |
| `givenName`                 | *string*                    | :heavy_check_mark:          | First name of the new user. |
| `familyName`                | *string*                    | :heavy_check_mark:          | Last name of the new user.  |