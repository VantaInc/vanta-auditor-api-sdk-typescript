# VendorStatus

The current state of a vendor:
- MANAGED: The vendor is actively managed.
- ARCHIVED: The vendor has been archived
- IN_PROCUREMENT: The vendor is in the procurement process

## Example Usage

```typescript
import { VendorStatus } from "vanta-auditor-api-sdk/models/components";

let value: VendorStatus = "ARCHIVED";
```

## Values

```typescript
"MANAGED" | "ARCHIVED" | "IN_PROCUREMENT"
```