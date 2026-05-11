# AuditorRequestListMetadata

Metadata about the auditor request list. This field is only present for IRL (Information
Request List) based audits and will be undefined for standard audits. Use the presence
of this field to differentiate between IRL and non-IRL audits.

## Example Usage

```typescript
import { AuditorRequestListMetadata } from "vanta-auditor-api-sdk/models/components";

let value: AuditorRequestListMetadata = {
  requestsSharedWithCustomer: new Date("2025-10-14T06:06:06.364Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `requestsSharedWithCustomer`                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp when information requests were shared with the customer. Null if not shared.        |