# ~~FillOutcome~~

Result of an automated evidence fill. Always null: only evidence fill activities
could populate it, and those are never returned, so nothing can set it. Do not
branch on it.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { FillOutcome } from "vanta-auditor-api-sdk/models/components";

let value: FillOutcome = "FAILED";
```

## Values

```typescript
"SUCCESS" | "PARTIAL" | "FAILED"
```