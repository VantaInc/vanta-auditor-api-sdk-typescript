# VantaTestSnapshotEvidenceDetail

Detail response for a captured automated-test snapshot evidence row.

Combines the test-level metadata (description, integrations, SLA
remediation) with a uniform raw-data array so external clients see the
same shape regardless of whether the snapshot was structured or
unstructured.

## Example Usage

```typescript
import { VantaTestSnapshotEvidenceDetail } from "vanta-auditor-api-sdk/models/components";

let value: VantaTestSnapshotEvidenceDetail = {
  testId: "<id>",
  testName: "<value>",
  description: "than aw numeracy perfectly paintwork lighthearted",
  evaluationCriteria: "<value>",
  integrations: [],
  slaRemediation: {
    id: "<id>",
    settings: {
      numericValue: 8946.49,
      unit: "becquerel",
    },
  },
  rawTestData: [],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `testId`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The unique identifier for the test in Vanta's system.                                                      |
| `testName`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The display name of the test.                                                                              |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | A short description of what the test checks.                                                               |
| `evaluationCriteria`                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Longer-form, formatted description of the test. Null when unset.                                           |
| `integrations`                                                                                             | [components.VantaTestSnapshotIntegration](../../models/components/vantatestsnapshotintegration.md)[]       | :heavy_check_mark:                                                                                         | Integrations whose data feeds the test.                                                                    |
| `slaRemediation`                                                                                           | [components.SlaRemediation](../../models/components/slaremediation.md)                                     | :heavy_check_mark:                                                                                         | SLA remediation policy attached to the test, or null when no SLA is set.                                   |
| `rawTestData`                                                                                              | [components.VantaTestSnapshotRawTestDataRow](../../models/components/vantatestsnapshotrawtestdatarow.md)[] | :heavy_check_mark:                                                                                         | Raw test data captured at snapshot time.                                                                   |