# ListAuditEvidenceUrlsRequest

## Example Usage

```typescript
import { ListAuditEvidenceUrlsRequest } from "vanta-auditor-api-sdk/models/operations";

let value: ListAuditEvidenceUrlsRequest = {
  auditId: "<id>",
  auditEvidenceId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `auditId`          | *string*           | :heavy_check_mark: | N/A                |
| `auditEvidenceId`  | *string*           | :heavy_check_mark: | N/A                |
| `pageSize`         | *number*           | :heavy_minus_sign: | N/A                |
| `pageCursor`       | *string*           | :heavy_minus_sign: | N/A                |