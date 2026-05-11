# InformationRequestApprovalStatus

Current approval status of the information request, tracking its lifecycle through the audit process.

The status progresses through the workflow: initial state → awaiting review → approved or flagged.
Status can move between awaiting review and flagged states as evidence is reviewed and resubmitted.

## Example Usage

```typescript
import { InformationRequestApprovalStatus } from "vanta-auditor-api-sdk/models/components";

let value: InformationRequestApprovalStatus = "READY_FOR_AUDIT";
```

## Values

```typescript
"NEEDS_EVIDENCE" | "READY_FOR_AUDIT" | "AUDITOR_APPROVED" | "AUDITOR_FLAGGED"
```