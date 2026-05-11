# OldStatus

Previous approval status before the status change.
Only populated for status change activities. Null for all other activity types.

## Example Usage

```typescript
import { OldStatus } from "vanta-auditor-api-sdk/models/components";

let value: OldStatus = "AUDITOR_FLAGGED";
```

## Values

```typescript
"READY_FOR_AUDIT" | "NEEDS_EVIDENCE" | "AUDITOR_APPROVED" | "AUDITOR_FLAGGED" | "READY_FOR_INTERNAL_REVIEW"
```