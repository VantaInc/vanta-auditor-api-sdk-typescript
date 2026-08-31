# Soc2Deliverable

SOC 2 report type and Trust Services Criteria for this segment, or null.

## Example Usage

```typescript
import { Soc2Deliverable } from "vanta-auditor-api-sdk/models/components";

let value: Soc2Deliverable = {
  reportType: "soc2type1",
  tscs: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `reportType`                                                                     | [components.AuditSoc2ReportType](../../models/components/auditsoc2reporttype.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `tscs`                                                                           | [components.AuditSoc2Tsc](../../models/components/auditsoc2tsc.md)[]             | :heavy_check_mark:                                                               | Trust Services Criteria this segment covers.                                     |