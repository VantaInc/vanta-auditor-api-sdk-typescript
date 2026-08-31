# ApprovalProgress

The issue's approval progress at the time the snapshot was captured,
or null if no approval was in progress or issue approvals are not enabled.

## Example Usage

```typescript
import { ApprovalProgress } from "vanta-auditor-api-sdk/models/components";

let value: ApprovalProgress = {
  approvedCount: 1,
  totalApprovers: 2,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `approvedCount`                                              | *number*                                                     | :heavy_check_mark:                                           | The number of approvers who have approved the issue.         | 1                                                            |
| `totalApprovers`                                             | *number*                                                     | :heavy_check_mark:                                           | The total number of approvers in the issue's approval chain. | 2                                                            |