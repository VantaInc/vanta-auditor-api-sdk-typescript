# DeactivateMetadata

Metadata for the deactivation of the vulnerability.

## Example Usage

```typescript
import { DeactivateMetadata } from "vanta-auditor-api-sdk/models/components";

let value: DeactivateMetadata = {
  isVulnDeactivatedIndefinitely: true,
  deactivatedUntilDate: new Date("2026-07-13T10:43:30.851Z"),
  deactivationReason: "<value>",
  deactivatedOnDate: new Date("2024-01-23T19:15:15.251Z"),
  deactivatedBy: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `isVulnDeactivatedIndefinitely`                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the vulnerability is deactivated indefinitely.                                        |
| `deactivatedUntilDate`                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Date when the vulnerability will be reactivated.                                              |
| `deactivationReason`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Reason for deactivating the vulnerability.                                                    |
| `deactivatedOnDate`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Date when the vulnerability was deactivated.                                                  |
| `deactivatedBy`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of the user who deactivated the vulnerability.                                     |