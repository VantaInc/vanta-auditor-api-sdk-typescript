# FillOutcome

Result of an automated evidence fill.
Only populated for evidence fill activities. Null for all other activity types.

## Example Usage

```typescript
import { FillOutcome } from "vanta-auditor-api-sdk/models/components";

let value: FillOutcome = "FAILED";
```

## Values

```typescript
"SUCCESS" | "PARTIAL" | "FAILED"
```