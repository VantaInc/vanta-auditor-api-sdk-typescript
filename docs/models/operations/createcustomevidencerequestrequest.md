# CreateCustomEvidenceRequestRequest

## Example Usage

```typescript
import { CreateCustomEvidenceRequestRequest } from "vanta-auditor-api-sdk/models/operations";

let value: CreateCustomEvidenceRequestRequest = {
  auditId: "<id>",
  createCustomEvidenceRequestInput: {
    controlIds: [],
    title: "<value>",
    description: "but surface healthily geez boohoo",
    cadence: "P6M",
    reminderWindow: "P1W",
    isRestricted: true,
    auditorEmail: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `auditId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createCustomEvidenceRequestInput`                                                                         | [components.CreateCustomEvidenceRequestInput](../../models/components/createcustomevidencerequestinput.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |