# VulnerableAssetScanner

## Example Usage

```typescript
import { VulnerableAssetScanner } from "vanta-auditor-api-sdk/models/components";

let value: VulnerableAssetScanner = {
  resourceId: "<id>",
  integrationId: "<id>",
  imageDigest: "<value>",
  imagePushedAtDate: new Date("2026-03-22T07:54:21.522Z"),
  imageTags: null,
  assetTags: [],
  parentAccountOrOrganization: "<value>",
  biosUuid: "<id>",
  ipv4s: [
    "<value 1>",
    "<value 2>",
  ],
  ipv6s: [
    "<value 1>",
    "<value 2>",
  ],
  macAddresses: [],
  hostnames: [],
  fqdns: [],
  operatingSystems: [
    "<value 1>",
  ],
  targetId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `resourceId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The scanned asset's Vanta resource id.                                                        |
| `integrationId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Integration that the the vulnerable asset is scanned by.                                      |
| `imageDigest`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Digest of the scanned container image.                                                        |
| `imagePushedAtDate`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Push date of the scanned container image.                                                     |
| `imageTags`                                                                                   | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Tags of the scanned container image.                                                          |
| `assetTags`                                                                                   | [components.KeyValuePair](../../models/components/keyvaluepair.md)[]                          | :heavy_check_mark:                                                                            | Tags of the scanned asset.                                                                    |
| `parentAccountOrOrganization`                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The parent account or organization of the scanned asset.                                      |
| `biosUuid`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | BIOS UUID of the scanned asset.                                                               |
| `ipv4s`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | IPV4s of the scanned asset.                                                                   |
| `ipv6s`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | IPV6s of the scanned asset.                                                                   |
| `macAddresses`                                                                                | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Mac addresses of the scanned asset.                                                           |
| `hostnames`                                                                                   | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Host names of the scanned asset.                                                              |
| `fqdns`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | fqdns of the scanned asset.                                                                   |
| `operatingSystems`                                                                            | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Operating systems of the scanned asset.                                                       |
| `targetId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The asset's identifier code.                                                                  |