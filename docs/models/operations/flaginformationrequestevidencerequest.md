# FlagInformationRequestEvidenceRequest

## Example Usage

```typescript
import { FlagInformationRequestEvidenceRequest } from "vanta-auditor-api-sdk/models/operations";

let value: FlagInformationRequestEvidenceRequest = {
  auditId: "<id>",
  requestId: "<id>",
  flagInformationRequestEvidenceInput: {
    auditorEmail: "<value>",
    reason: "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `auditId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `requestId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `flagInformationRequestEvidenceInput`                                                                            | [components.FlagInformationRequestEvidenceInput](../../models/components/flaginformationrequestevidenceinput.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |