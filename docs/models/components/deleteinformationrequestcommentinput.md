# DeleteInformationRequestCommentInput

Deletes an existing comment on an information request.
Only the original author of the comment can delete it.

## Example Usage

```typescript
import { DeleteInformationRequestCommentInput } from "vanta-auditor-api-sdk/models/components";

let value: DeleteInformationRequestCommentInput = {
  email: "Ewell_Mante65@hotmail.com",
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                                                                                | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | Email address of the comment author.<br/>Must match an existing Vanta user who belongs to the audit firm making the API request.<br/>This email uniquely identifies the author across systems. |