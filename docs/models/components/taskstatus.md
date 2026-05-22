# TaskStatus

The status of a task.
- COMPLETE: The task has been completed.
- DUE_SOON: The task is due soon.
- OVERDUE: The task is overdue.
- NONE: The task is not assigned.

## Example Usage

```typescript
import { TaskStatus } from "vanta-auditor-api-sdk/models/components";

let value: TaskStatus = "DUE_SOON";
```

## Values

```typescript
"COMPLETE" | "DUE_SOON" | "OVERDUE" | "NONE"
```