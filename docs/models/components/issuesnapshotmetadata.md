# IssueSnapshotMetadata

## Example Usage

```typescript
import { IssueSnapshotMetadata } from "vanta-auditor-api-sdk/models/components";

let value: IssueSnapshotMetadata = {
  id: "5f2c939a52855e725c8d5823",
  title: "Snapshot taken on 2024-06-01T00:00:00Z",
  description: "This snapshot captures all open issues as of June 1st, 2024.",
  createdAt: new Date("2024-06-01T00:00:00.000Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the issue snapshot.                                                 | 5f2c939a52855e725c8d5823                                                                      |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The title of the snapshot                                                                     | Snapshot taken on 2024-06-01T00:00:00Z                                                        |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description of the snapshot                                                               | This snapshot captures all open issues as of June 1st, 2024.                                  |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the snapshot was created.                                              | 2024-06-01T00:00:00.000Z                                                                      |