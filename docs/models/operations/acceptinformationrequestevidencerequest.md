# AcceptInformationRequestEvidenceRequest

## Example Usage

```typescript
import { AcceptInformationRequestEvidenceRequest } from "vanta-auditor-api-sdk/models/operations";

let value: AcceptInformationRequestEvidenceRequest = {
  auditId: "<id>",
  requestId: "<id>",
  acceptInformationRequestEvidenceInput: {
    auditorEmail: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `auditId`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `requestId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `acceptInformationRequestEvidenceInput`                                                                              | [components.AcceptInformationRequestEvidenceInput](../../models/components/acceptinformationrequestevidenceinput.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |