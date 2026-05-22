# MonitoredComputer

## Example Usage

```typescript
import { MonitoredComputer } from "vanta-auditor-api-sdk/models/components";

let value: MonitoredComputer = {
  id: "<id>",
  integrationId: "<id>",
  lastCheckDate: new Date("2026-06-28T14:51:55.535Z"),
  screenlock: {
    outcome: "IN_PROGRESS",
  },
  diskEncryption: {
    outcome: "PASS",
  },
  passwordManager: {
    outcome: "PASS",
  },
  antivirusInstallation: {
    outcome: "PASS",
  },
  operatingSystem: null,
  owner: {
    id: "<id>",
    displayName: "Dina.McLaughlin",
    emailAddress: "Edyth.Goldner@gmail.com",
  },
  serialNumber: null,
  udid: "<id>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                          | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Unique identifier for the monitored computer.                                                                                 |
| `integrationId`                                                                                                               | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Hard-coded enums for Vanta-built integrations or application IDs for 3rd-party-built integrations.                            |
| `lastCheckDate`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                 | :heavy_check_mark:                                                                                                            | Date of the computer's most recent report.                                                                                    |
| `screenlock`                                                                                                                  | [components.ComputerStatus](../../models/components/computerstatus.md)                                                        | :heavy_check_mark:                                                                                                            | The a status check for a computer. Representation for screenlock, diskEncryption, passwordManager, and antivirusInstallation. |
| `diskEncryption`                                                                                                              | [components.ComputerStatus](../../models/components/computerstatus.md)                                                        | :heavy_check_mark:                                                                                                            | The a status check for a computer. Representation for screenlock, diskEncryption, passwordManager, and antivirusInstallation. |
| `passwordManager`                                                                                                             | [components.ComputerStatus](../../models/components/computerstatus.md)                                                        | :heavy_check_mark:                                                                                                            | The a status check for a computer. Representation for screenlock, diskEncryption, passwordManager, and antivirusInstallation. |
| `antivirusInstallation`                                                                                                       | [components.ComputerStatus](../../models/components/computerstatus.md)                                                        | :heavy_check_mark:                                                                                                            | The a status check for a computer. Representation for screenlock, diskEncryption, passwordManager, and antivirusInstallation. |
| `operatingSystem`                                                                                                             | [components.OperatingSystem](../../models/components/operatingsystem.md)                                                      | :heavy_check_mark:                                                                                                            | The computer's operating system name and version.                                                                             |
| `owner`                                                                                                                       | [components.MonitoredComputerOwner](../../models/components/monitoredcomputerowner.md)                                        | :heavy_check_mark:                                                                                                            | The name, unique identifier, and email address of the computer's owner.                                                       |
| `serialNumber`                                                                                                                | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The serial number of the computer. This value may be null if it is not reported by the device.                                |
| `udid`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The universal device id of the computer.                                                                                      |