# VantaTestSnapshotRawTestDataRow

One row of raw test data attached to a snapshot.

For structured snapshots, every row carries the resource refs and the raw
JSON for that resource. For unstructured snapshots, a single row is returned
with `resourceId` and `resourceType` set to `null` and `rawJson` containing
the entire test-run JSON blob.

## Example Usage

```typescript
import { VantaTestSnapshotRawTestDataRow } from "vanta-auditor-api-sdk/models/components";

let value: VantaTestSnapshotRawTestDataRow = {
  resourceId: "<id>",
  resourceType: "<value>",
  rawJson: "<value>",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                                                                                           | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | Identifier of the underlying resource the row was captured from. Null for<br/>unstructured snapshots, which do not partition by resource.                              |
| `resourceType`                                                                                                                                                         | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | Specific resource kind for the row (e.g. `AwsIamUser`). Null for<br/>unstructured snapshots.                                                                           |
| `rawJson`                                                                                                                                                              | *any*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                     | Raw JSON payload as emitted by the test runner. Shape varies by<br/>`resourceType` for structured snapshots and matches the full test-run<br/>blob for unstructured snapshots. |