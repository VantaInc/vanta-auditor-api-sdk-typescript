# CreateInformationRequestRequest

## Example Usage

```typescript
import { CreateInformationRequestRequest } from "vanta-auditor-api-sdk/models/operations";

let value: CreateInformationRequestRequest = {
  auditId: "<id>",
  createInformationRequestInput: {
    uniqueId: "<id>",
    title: "<value>",
    requestType: "POINT_IN_TIME",
    frameworkCodes: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `auditId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createInformationRequestInput`                                                                      | [components.CreateInformationRequestInput](../../models/components/createinformationrequestinput.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |