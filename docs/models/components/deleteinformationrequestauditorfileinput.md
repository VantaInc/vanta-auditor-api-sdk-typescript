# DeleteInformationRequestAuditorFileInput

## Example Usage

```typescript
import { DeleteInformationRequestAuditorFileInput } from "vanta-auditor-api-sdk/models/components";

let value: DeleteInformationRequestAuditorFileInput = {
  email: "Alyce_Daugherty@yahoo.com",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The email of the auditor deleting the file. They must be an active user in<br/>your audit firm and assigned to the audit. |