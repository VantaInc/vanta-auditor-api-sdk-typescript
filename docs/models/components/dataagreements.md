# DataAgreements

BAA/DPA document completion counts, or null if no such documents are required.
Full Audit View only - omitted in Controlled Audit View.

## Example Usage

```typescript
import { DataAgreements } from "vanta-auditor-api-sdk/models/components";

let value: DataAgreements = {
  total: 1575.72,
  complete: 9068.08,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `total`            | *number*           | :heavy_check_mark: | N/A                |
| `complete`         | *number*           | :heavy_check_mark: | N/A                |