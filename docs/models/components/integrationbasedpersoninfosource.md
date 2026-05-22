# IntegrationBasedPersonInfoSource

The person's information comes from an integration.

## Example Usage

```typescript
import { IntegrationBasedPersonInfoSource } from "vanta-auditor-api-sdk/models/components";

let value: IntegrationBasedPersonInfoSource = {
  integrationId: "<id>",
  resourceId: "<id>",
  type: "INTEGRATION",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `integrationId`    | *string*           | :heavy_check_mark: | N/A                |
| `resourceId`       | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *"INTEGRATION"*    | :heavy_check_mark: | N/A                |