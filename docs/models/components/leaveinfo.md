# LeaveInfo

If present, the user's active/upcoming leave. Empty if the user has no active/upcoming leave.

## Example Usage

```typescript
import { LeaveInfo } from "vanta-auditor-api-sdk/models/components";

let value: LeaveInfo = {
  startDate: new Date("2026-10-12T11:13:11.548Z"),
  endDate: new Date("2024-05-26T06:39:40.324Z"),
  status: "ACTIVE",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The start of the person's leave.                                                              |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The end of the person's leave. Null endDate implies indefinite leave.                         |
| `status`                                                                                      | [components.LeaveStatus](../../models/components/leavestatus.md)                              | :heavy_check_mark:                                                                            | User can be active or upcoming leave period                                                   |