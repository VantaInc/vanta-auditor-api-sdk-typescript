# Evidence

## Example Usage

```typescript
import { Evidence } from "vanta-auditor-api-sdk/models/components";

let value: Evidence = {
  id: "<id>",
  externalId: "<id>",
  status: "Not ready for audit",
  name: "<value>",
  deletionDate: new Date("2023-02-04T21:29:28.328Z"),
  creationDate: new Date("2023-06-30T12:06:54.333Z"),
  statusUpdatedDate: new Date("2024-11-12T03:22:04.343Z"),
  testStatus: "<value>",
  evidenceType: "Policy",
  evidenceId: "<id>",
  relatedControls: [
    {
      name: "<value>",
      sectionNames: [
        "<value>",
      ],
    },
  ],
  description: "justly pfft oh delete",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Vanta internal reference to evidence                                                          |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | This is a static UUID to map Audit Firm controls to Vanta controls                            |
| `status`                                                                                      | [components.AuditEvidenceState](../../models/components/auditevidencestate.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Mutable name for evidence. Not guaranteed to be unique.                                       |
| `deletionDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this Audit Evidence was deleted                                                      |
| `creationDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date this Audit Evidence was created                                                      |
| `statusUpdatedDate`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Point in time that status was last updated                                                    |
| `testStatus`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The outcome of the automated test run, for Test-type evidence                                 |
| `evidenceType`                                                                                | [components.AuditEvidenceType](../../models/components/auditevidencetype.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evidenceId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for evidence                                                                |
| `relatedControls`                                                                             | [components.EvidenceControl](../../models/components/evidencecontrol.md)[]                    | :heavy_check_mark:                                                                            | The controls associated to this evidence                                                      |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description for the evidence. It will be set to null if the evidence is deleted           |