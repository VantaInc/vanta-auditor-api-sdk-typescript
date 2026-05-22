# ListMonitoredComputersInAuditScopeRequest

## Example Usage

```typescript
import { ListMonitoredComputersInAuditScopeRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListMonitoredComputersInAuditScopeRequest = {
  auditId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `auditId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pageSize`                                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `pageCursor`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `complianceStatusFilterMatchesAny`                                                   | [components.ComputerStatusFilter](../../models/components/computerstatusfilter.md)[] | :heavy_minus_sign:                                                                   | Filters for monitored computers matching any status declared in the filter.          |