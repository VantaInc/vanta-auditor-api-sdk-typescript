# TaskType

The type a task summary falls into.
COMPLETE_TRAININGS: The task summary containing security trainings.
ACCEPT_POLICIES: The task summary containing policy acceptance.
COMPLETE_CUSTOM_TASKS: The task summary containing custom tasks.
INSTALL_DEVICE_MONITORING: The task summary containing device monitoring installation.
COMPLETE_BACKGROUND_CHECKS: The task summary containing background checks.

## Example Usage

```typescript
import { TaskType } from "vanta-auditor-api-sdk/models/components";

let value: TaskType = "INSTALL_DEVICE_MONITORING";
```

## Values

```typescript
"COMPLETE_TRAININGS" | "ACCEPT_POLICIES" | "COMPLETE_CUSTOM_TASKS" | "COMPLETE_CUSTOM_OFFBOARDING_TASKS" | "INSTALL_DEVICE_MONITORING" | "COMPLETE_BACKGROUND_CHECKS"
```