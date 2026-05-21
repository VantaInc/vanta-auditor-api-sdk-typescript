# Source

Source of user data, or null if not available.
Full Audit View only - omitted in Controlled Audit View.

## Example Usage

```typescript
import { Source } from "vanta-auditor-api-sdk/models/components";

let value: Source = {
  mainSource: "Okta",
  supplementarySource: "Google Workspace",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `mainSource`                           | *string*                               | :heavy_check_mark:                     | Main source of user data.              | Okta                                   |
| `supplementarySource`                  | *string*                               | :heavy_check_mark:                     | Supplementary source, or null if none. | Google Workspace                       |