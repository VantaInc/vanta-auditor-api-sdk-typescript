# CreateCustomEvidenceRequestRequest

## Example Usage

```typescript
import { CreateCustomEvidenceRequestRequest } from "vanta-auditor-api-sdk/models/operations";

let value: CreateCustomEvidenceRequestRequest = {
  auditId: "<id>",
  createCustomEvidenceRequestInput: {
    controlIds: [
      "<value>",
    ],
    title: "<value>",
    description: "noon obediently solicit",
    cadence: "P1W",
    reminderWindow: "P1D",
    isRestricted: false,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `auditId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createCustomEvidenceRequestInput`                                                                         | [components.CreateCustomEvidenceRequestInput](../../models/components/createcustomevidencerequestinput.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |