# EmploymentStatus

The employment status of a person:
- UPCOMING: The person is not yet employed and will start employment in the future.
- CURRENT: The person is currently employed.
- ON_LEAVE: The person is on leave.
- INACTIVE: The person's employment is inactive.
- FORMER: The person was previously employed.

## Example Usage

```typescript
import { EmploymentStatus } from "vanta-auditor-api-sdk/models/components";

let value: EmploymentStatus = "FORMER";
```

## Values

```typescript
"UPCOMING" | "CURRENT" | "ON_LEAVE" | "INACTIVE" | "FORMER"
```