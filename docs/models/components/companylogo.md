# CompanyLogo

Company logo reference (download URL), or null if no logo is uploaded.

## Example Usage

```typescript
import { CompanyLogo } from "vanta-auditor-api-sdk/models/components";

let value: CompanyLogo = {
  url: "https://storage.example.com/logos/acme.png",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `url`                                      | *string*                                   | :heavy_check_mark:                         | URL to download the company logo.          | https://storage.example.com/logos/acme.png |