# StatusUpdate

## Example Usage

```typescript
import { StatusUpdate } from "vanta-auditor-api-sdk/models/components";

let value: StatusUpdate = {
  auditorEmail: "<value>",
  stateTransition: "ACCEPT",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `auditorEmail`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | Email of the auditor who changed the state                                                           |
| `stateTransition`                                                                                    | [components.AuditorEnabledStateTransition](../../models/components/auditorenabledstatetransition.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |