# AuditRiskOwner

Risk owner information, or null if no owner assigned.

## Example Usage

```typescript
import { AuditRiskOwner } from "vanta-auditor-api-sdk/models/components";

let value: AuditRiskOwner = {
  displayName: "Jane Doe",
  imageUrl: "https://app.vanta.com/avatar.png",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `displayName`                                               | *string*                                                    | :heavy_check_mark:                                          | Display name of the risk owner.                             | Jane Doe                                                    |
| `imageUrl`                                                  | *string*                                                    | :heavy_check_mark:                                          | URL of the owner's profile image, or null if not available. | https://app.vanta.com/avatar.png                            |