# EvidenceControl

## Example Usage

```typescript
import { EvidenceControl } from "vanta-auditor-api-sdk/models/components";

let value: EvidenceControl = {
  name: "<value>",
  sectionNames: [],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `name`                                      | *string*                                    | :heavy_check_mark:                          | Name of control associated to this evidence |
| `sectionNames`                              | *string*[]                                  | :heavy_check_mark:                          | A list sections associated to the control   |