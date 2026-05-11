# Cadence

How frequently this information request recurs (e.g., annual password
policy reviews). Null for one-time requests.

## Example Usage

```typescript
import { Cadence } from "vanta-auditor-api-sdk/models/components";

let value: Cadence = "BIANNUALLY";
```

## Values

```typescript
"ANNUALLY" | "BIANNUALLY" | "MONTHLY" | "QUARTERLY"
```