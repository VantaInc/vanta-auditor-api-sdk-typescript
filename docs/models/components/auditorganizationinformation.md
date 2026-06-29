# AuditOrganizationInformation

Organization information record returned by the auditor organization API.

`id` and `displayName` are always present (primary fields). Other fields
are optional to support controlled audits where only approved columns are
returned.

## Example Usage

```typescript
import { AuditOrganizationInformation } from "vanta-auditor-api-sdk/models/components";

let value: AuditOrganizationInformation = {
  id: "5f2c939a52855e725c8d5824",
  displayName: "Acme Corp",
  legalName: "Acme Corporation Inc.",
  incorporation: "Incorporated in the United States",
  url: "https://acme.example.com",
  mailingAddress: "123 Main St, San Francisco, CA 94105",
  telephone: "+1-555-123-4567",
  companyLogo: {
    url: "https://storage.example.com/logos/acme.png",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Business info document identifier.                                                                                          | 5f2c939a52855e725c8d5824                                                                                                    |
| `displayName`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Display name of the organization.                                                                                           | Acme Corp                                                                                                                   |
| `legalName`                                                                                                                 | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Legal name of the organization.                                                                                             | Acme Corporation Inc.                                                                                                       |
| `incorporation`                                                                                                             | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Incorporation status. Returns "Incorporated in the United States"<br/>when the organization is a US company, or null otherwise. | Incorporated in the United States                                                                                           |
| `url`                                                                                                                       | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Organization URL.                                                                                                           | https://acme.example.com                                                                                                    |
| `mailingAddress`                                                                                                            | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Mailing address of the organization.                                                                                        | 123 Main St, San Francisco, CA 94105                                                                                        |
| `telephone`                                                                                                                 | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Telephone number of the organization.                                                                                       | +1-555-123-4567                                                                                                             |
| `companyLogo`                                                                                                               | [components.CompanyLogo](../../models/components/companylogo.md)                                                            | :heavy_minus_sign:                                                                                                          | Company logo reference (download URL), or null if no logo is uploaded.                                                      |                                                                                                                             |