# VulnerableAsset

## Example Usage

```typescript
import { VulnerableAsset } from "vanta-auditor-api-sdk/models/components";

let value: VulnerableAsset = {
  id: "<id>",
  name: "<value>",
  assetType: "MANIFEST_FILE",
  hasBeenScanned: true,
  imageScanTag: "<value>",
  scanners: [
    {
      resourceId: "<id>",
      integrationId: "<id>",
      imageDigest: "<value>",
      imagePushedAtDate: new Date("2024-05-13T12:11:50.082Z"),
      imageTags: [],
      assetTags: [],
      parentAccountOrOrganization: "<value>",
      biosUuid: null,
      ipv4s: [
        "<value 1>",
        "<value 2>",
      ],
      ipv6s: [],
      macAddresses: null,
      hostnames: [
        "<value 1>",
      ],
      fqdns: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      operatingSystems: [
        "<value 1>",
        "<value 2>",
      ],
      targetId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Unique identifier for the vulnerable asset.                                                                                                                                |
| `name`                                                                                                                                                                     | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Display name of the vulnerable asset.                                                                                                                                      |
| `assetType`                                                                                                                                                                | [components.VulnerableAssetType](../../models/components/vulnerableassettype.md)                                                                                           | :heavy_check_mark:                                                                                                                                                         | VulnerableAssetType describes the types of assets a vulnerability is on.                                                                                                   |
| `hasBeenScanned`                                                                                                                                                           | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the vulnerable asset has been scanned.                                                                                                                             |
| `imageScanTag`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Only relevant for container repositories. This field sets the container image tag that vulnerabilities will be retrieved for. If null, the latest image will be retrieved. |
| `scanners`                                                                                                                                                                 | [components.VulnerableAssetScanner](../../models/components/vulnerableassetscanner.md)[]                                                                                   | :heavy_check_mark:                                                                                                                                                         | The integrations that are scanning this vulnerable asset.                                                                                                                  |