# PaginatedResponseAuditRisk

## Example Usage

```typescript
import { PaginatedResponseAuditRisk } from "vanta-auditor-api-sdk/models/components";

let value: PaginatedResponseAuditRisk = {
  results: {
    data: [
      {
        id: "5f2c939a52855e725c8d5824",
        riskId: "RISK-001",
        riskScenario: "Unauthorized access to production database",
        likelihood: 4,
        impact: 5,
        inherentRisk: 20,
        treatment: "MITIGATE",
        treatmentStatus: "IN_PROGRESS",
        residualRisk: 6,
        reviewStatus: "APPROVED",
        owner: {
          displayName: "Jane Doe",
          imageUrl: "https://app.vanta.com/avatar.png",
        },
        categories: [
          "Cryptography",
          "Privacy",
        ],
        ciaCategories: [
          "CONFIDENTIALITY",
          "INTEGRITY",
        ],
        linkedControlIds: [
          "control-1",
          "control-2",
        ],
        identified: "2023-01-15T10:00:00.000Z",
      },
    ],
    pageInfo: {
      endCursor: "<value>",
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `results`                                                                                                    | [components.PaginatedResponseAuditRiskResults](../../models/components/paginatedresponseauditriskresults.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |