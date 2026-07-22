# AuditControlAssessmentState

An auditor's assessment of a control within an audit. This is the full flat
union of every framework's assessment states (the superset); a given audit's
framework only uses its own subset. `NOT_ASSESSED` is shared by all
frameworks and is the default for a control that has not yet been assessed.

Which states apply to which framework:
- Most frameworks (e.g. SOC 2): `IN_PLACE`, `NOT_IN_PLACE`, `PARTIAL`, `NOT_ASSESSED`
- ISO 27001: `CONFORMING`, `MINOR_NON_CONFORMITY`, `MAJOR_NON_CONFORMITY`, `NOT_ASSESSED`
- FedRAMP: `SATISFIED`, `NOT_SATISFIED`, `OTHER_THAN_SATISFIED`, `NOT_ASSESSED`
- FedRAMP Key Security Indicators (KSI): `TRUE`, `FALSE`, `PARTIAL`, `NOT_ASSESSED`

Distinct from `ControlStatus`, which is the computed tests/documents-passing
status — a different concept.

## Example Usage

```typescript
import { AuditControlAssessmentState } from "vanta-auditor-api-sdk/models/components";

let value: AuditControlAssessmentState = "OTHER_THAN_SATISFIED";
```

## Values

```typescript
"IN_PLACE" | "NOT_IN_PLACE" | "PARTIAL" | "NOT_ASSESSED" | "CONFORMING" | "MINOR_NON_CONFORMITY" | "MAJOR_NON_CONFORMITY" | "SATISFIED" | "NOT_SATISFIED" | "OTHER_THAN_SATISFIED" | "TRUE" | "FALSE"
```