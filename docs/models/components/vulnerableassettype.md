# VulnerableAssetType

VulnerableAssetType describes the types of assets a vulnerability is on.

## Example Usage

```typescript
import { VulnerableAssetType } from "vanta-auditor-api-sdk/models/components";

let value: VulnerableAssetType = "SERVERLESS_FUNCTION";
```

## Values

```typescript
"SERVER" | "SERVERLESS_FUNCTION" | "CONTAINER" | "CONTAINER_REPOSITORY" | "CONTAINER_REPOSITORY_IMAGE" | "CODE_REPOSITORY" | "MANIFEST_FILE" | "WORKSTATION" | "OTHER"
```