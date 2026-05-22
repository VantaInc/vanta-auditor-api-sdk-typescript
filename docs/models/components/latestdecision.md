# LatestDecision

The vendor's latest decision status. Null means no decision has been made.

## Example Usage

```typescript
import { LatestDecision } from "vanta-auditor-api-sdk/models/components";

let value: LatestDecision = {
  status: "CONDITIONALLY_APPROVED",
  lastUpdatedAt: new Date("2024-10-14T17:56:03.175Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [components.VendorDecisionStatus](../../models/components/vendordecisionstatus.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastUpdatedAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |