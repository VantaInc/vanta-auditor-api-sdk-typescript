# NewStatus

New approval status after the status change.
Only populated for status change activities. Null for all other activity types.

## Example Usage

```typescript
import { NewStatus } from "vanta-auditor-api-sdk/models/components";

let value: NewStatus = "READY_FOR_AUDIT";
```

## Values

```typescript
"READY_FOR_AUDIT" | "NEEDS_EVIDENCE" | "AUDITOR_APPROVED" | "AUDITOR_FLAGGED" | "READY_FOR_INTERNAL_REVIEW"
```