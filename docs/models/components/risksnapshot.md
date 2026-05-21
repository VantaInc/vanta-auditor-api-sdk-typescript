# RiskSnapshot

A risk assessment snapshot available for an audit.

Risk snapshots capture the state of an organization's risk register at a
point in time. Use the snapshot `id` with the `/audits/{auditId}/risks/{snapshotId}`
endpoint to retrieve the risk scenarios within a snapshot.

## Example Usage

```typescript
import { RiskSnapshot } from "vanta-auditor-api-sdk/models/components";

let value: RiskSnapshot = {
  id: "507f1f77bcf86cd799439011",
  createdAt: new Date("2025-04-08T15:35:24.939Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the risk snapshot.                                                      | 507f1f77bcf86cd799439011                                                                      |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when this risk snapshot was created.                                        |                                                                                               |