# IrlGenerationStatus

Generation status of this audit's Vanta-generated information request list
(IRL). `PENDING`/`RUNNING` defer initial sync, `READY` permits a full sync,
and `FAILED` is terminal. Null means the audit has no generated IRL.

## Example Usage

```typescript
import { IrlGenerationStatus } from "vanta-auditor-api-sdk/models/components";

let value: IrlGenerationStatus = "PENDING";
```

## Values

```typescript
"PENDING" | "RUNNING" | "READY" | "FAILED"
```