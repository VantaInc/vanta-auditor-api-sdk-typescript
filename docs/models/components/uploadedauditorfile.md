# UploadedAuditorFile

## Example Usage

```typescript
import { UploadedAuditorFile } from "vanta-auditor-api-sdk/models/components";

let value: UploadedAuditorFile = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                              | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | ID of the attached auditor file. Match it to `id` in the auditor-files list, or use it as `auditorFileId` when deleting the file. |