# ComputerStatusFilter

Enum representing computer compliance statuses that can be utilized as a filter. The meanings are as follows:
AV_NOT_INSTALLED: The computer does not have antivirus software installed.
HD_NOT_ENCRYPTED: The computer's harddrive is not encrypted.
LAST_CHECK_OVER_14_DAYS: No data has been received from computer for over 14 days.
PWM_NOT_INSTALLED: The computer does not have a password manager installed.
SCREENLOCK_NOT_CONFIGURED: The computer does not have screenlock configured appropriately.

## Example Usage

```typescript
import { ComputerStatusFilter } from "vanta-auditor-api-sdk/models/components";

let value: ComputerStatusFilter = "LAST_CHECK_OVER_14_DAYS";
```

## Values

```typescript
"PWM_NOT_INSTALLED" | "HD_NOT_ENCRYPTED" | "AV_NOT_INSTALLED" | "SCREENLOCK_NOT_CONFIGURED" | "LAST_CHECK_OVER_14_DAYS"
```