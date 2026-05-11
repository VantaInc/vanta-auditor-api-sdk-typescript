<!-- Start SDK Example Usage [usage] -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.list({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->