# LinkEvidence

Evidence in the form of a link to external documentation or resources.

## Example Usage

```typescript
import { LinkEvidence } from "vanta-auditor-api-sdk/models/components";

let value: LinkEvidence = {
  title: "<value>",
  url: "https://smug-affect.net",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `title`                                                           | *string*                                                          | :heavy_check_mark:                                                | The title or descriptive name for the link.                       |
| `description`                                                     | *string*                                                          | :heavy_minus_sign:                                                | Optional description providing additional context about the link. |
| `url`                                                             | *string*                                                          | :heavy_check_mark:                                                | The URL pointing to the external documentation or resource.       |