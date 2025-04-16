# CreateCustomEvidenceRequestInput

## Example Usage

```typescript
import { CreateCustomEvidenceRequestInput } from "vanta-auditor-api-sdk/models/components";

let value: CreateCustomEvidenceRequestInput = {
  controlIds: [
    "<value>",
  ],
  title: "<value>",
  description:
    "accountability receptor innocently wherever castanet guard diligent vibrant",
  cadence: "P6M",
  reminderWindow: "P1W",
  isRestricted: false,
  auditorEmail: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `controlIds`                                                                         | *string*[]                                                                           | :heavy_check_mark:                                                                   | A set of controls, referenced by id, to map the evidence to                          |
| `title`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Title for the evidence request                                                       |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | Description for the evidence request                                                 |
| `cadence`                                                                            | [components.RecurrenceDuration](../../models/components/recurrenceduration.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `reminderWindow`                                                                     | [components.RecurrenceDuration](../../models/components/recurrenceduration.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `isRestricted`                                                                       | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether this document contains sensitive data and needs more restrictive read access |
| `auditorEmail`                                                                       | *string*                                                                             | :heavy_check_mark:                                                                   | Email of the auditor who created the custom evidence request.                        |