# AuditSegment

One segment of an audit's scope. A live single-framework audit has exactly
one entry; a live multi-framework audit has one per in-scope framework
(and business unit or system, when applicable). Soft-deleted audits return
an empty list. `displayName` is the segment label owned by audit scope
(for example "{Framework}" or "{Framework} — {Business Unit}").
`soc2Deliverable` is the per-segment SOC 2 config, or null. `businessUnit`
is set for program segments that are BU-scoped and null otherwise. `system`
is set for system segments and null otherwise.

## Example Usage

```typescript
import { AuditSegment } from "vanta-auditor-api-sdk/models/components";

let value: AuditSegment = {
  id: "<id>",
  kind: "SYSTEM",
  displayName: "Carmelo1",
  framework: {
    displayName: "Clyde57",
  },
  businessUnit: {
    id: "<id>",
    displayName: "Stacy90",
  },
  system: {
    id: "<id>",
    displayName: "Miller72",
  },
  soc2Deliverable: {
    reportType: "soc2type2",
    tscs: [
      "AVAILABILITY",
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The unique identifier for the segment.                                                                                       |
| `kind`                                                                                                                       | [components.AuditSegmentKind](../../models/components/auditsegmentkind.md)                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `displayName`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The segment's display label. Do not reconstruct this from framework + BU.                                                    |
| `framework`                                                                                                                  | [components.AuditSegmentFramework](../../models/components/auditsegmentframework.md)                                         | :heavy_check_mark:                                                                                                           | The framework this segment is in.                                                                                            |
| `businessUnit`                                                                                                               | [components.BusinessUnit](../../models/components/businessunit.md)                                                           | :heavy_check_mark:                                                                                                           | The business unit this program segment is scoped to, or null when the<br/>segment is not BU-scoped or the BU cannot be resolved. |
| `system`                                                                                                                     | [components.System](../../models/components/system.md)                                                                       | :heavy_check_mark:                                                                                                           | The information system this system segment is scoped to, or null on<br/>program segments.                                    |
| `soc2Deliverable`                                                                                                            | [components.Soc2Deliverable](../../models/components/soc2deliverable.md)                                                     | :heavy_check_mark:                                                                                                           | SOC 2 report type and Trust Services Criteria for this segment, or null.                                                     |