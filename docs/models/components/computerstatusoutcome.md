# ComputerStatusOutcome

The possible outcomes of a status check. The outcome can be one of the following:
FAIL:  The check is failing.
IN_PROGRESS: The check needs further data from the given computer in order to evaluate. The field(s) needed from a computer to calculate the ComputerStatusOutcome were null.
NA: The check is not applicable for the given computer.
PASS: The check is passing.

## Example Usage

```typescript
import { ComputerStatusOutcome } from "vanta-auditor-api-sdk/models/components";

let value: ComputerStatusOutcome = "NA";
```

## Values

```typescript
"FAIL" | "IN_PROGRESS" | "NA" | "PASS"
```