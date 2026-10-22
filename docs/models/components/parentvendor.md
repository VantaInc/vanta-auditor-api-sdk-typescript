# ParentVendor

The parent vendor of this engagement, or null when there is no accessible parent.

## Example Usage

```typescript
import { ParentVendor } from "vanta-auditor-api-sdk/models/components";

let value: ParentVendor = {
  id: "<id>",
  name: "<value>",
  status: "MANAGED",
  websiteUrl: "https://submissive-dividend.net",
};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                          | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | The vendor's unique ID.                                                                                                                                                       |
| `name`                                                                                                                                                                        | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | The vendor's display name.                                                                                                                                                    |
| `status`                                                                                                                                                                      | [components.VendorStatus](../../models/components/vendorstatus.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                            | The current state of a vendor:<br/>- MANAGED: The vendor is actively managed.<br/>- ARCHIVED: The vendor has been archived<br/>- IN_PROCUREMENT: The vendor is in the procurement process |
| `websiteUrl`                                                                                                                                                                  | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | The vendor's website URL, or null when none is set.                                                                                                                           |