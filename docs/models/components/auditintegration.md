# AuditIntegration

Integration row returned by the auditor integrations API.

`id` and `name` are always present. Other fields are optional to support
controlled audits where only approved columns are returned.

## Example Usage

```typescript
import { AuditIntegration } from "vanta-auditor-api-sdk/models/components";

let value: AuditIntegration = {
  id: "github",
  name: "GitHub",
  tags: [
    "Vulnerabilities",
    "Code changes",
  ],
  categories: [
    "Version control systems",
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | Integration identifier.                                                            | github                                                                             |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | Display name of the integration.                                                   | GitHub                                                                             |
| `tags`                                                                             | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Integration category display names describing what data this integration provides. | [<br/>"Vulnerabilities",<br/>"Code changes"<br/>]                                  |
| `categories`                                                                       | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Service category display names describing what the integration is used for.        | [<br/>"Version control systems"<br/>]                                              |