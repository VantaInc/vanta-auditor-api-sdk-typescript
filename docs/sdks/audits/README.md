# Audits

## Overview

### Available Operations

* [list](#list) - List audits
* [duplicate](#duplicate) - Duplicate an IRL audit
* [getAudit](#getaudit) - Get audit by ID
* [listCodeChanges](#listcodechanges) - List code changes for an audit
* [listComments](#listcomments) - List audit comments
* [listControls](#listcontrols) - List audit controls
* [createCustomControl](#createcustomcontrol) - Create a custom control for an audit
* [upsertAssessmentForControl](#upsertassessmentforcontrol) - Upsert a control's assessment within an audit
* [listCommentsForControl](#listcommentsforcontrol) - List comments for a control within an audit
* [createCommentForControl](#createcommentforcontrol) - Create a comment for a control within an audit
* [updateCommentForControl](#updatecommentforcontrol) - Update a comment for a control within an audit
* [deleteCommentForControl](#deletecommentforcontrol) - Delete a comment for a control within an audit
* [listInformationRequestsForControl](#listinformationrequestsforcontrol) - List information requests linked to a control within an audit
* [listEvidence](#listevidence) - List audit evidence
* [createCustomEvidenceRequest](#createcustomevidencerequest) - Create a custom evidence request for an audit
* [updateEvidence](#updateevidence) - Update audit evidence
* [getAuditEvidence](#getauditevidence) - Get an audit evidence item by ID
* [createCommentForEvidence](#createcommentforevidence) - Create a comment for audit evidence
* [getAuditEvidenceComment](#getauditevidencecomment) - Get an audit evidence comment by ID
* [getEvidenceUrls](#getevidenceurls) - List audit evidence url
* [getFrameworkCodes](#getframeworkcodes) - Get framework codes for an audit
* [listInformationRequests](#listinformationrequests) - List information requests for an audit
* [createInformationRequest](#createinformationrequest) - Create a new information request
* [getInformationRequest](#getinformationrequest) - Get an information request by ID
* [updateInformationRequest](#updateinformationrequest) - Update an information request for an audit
* [deleteInformationRequest](#deleteinformationrequest) - Delete an information request for an audit
* [acceptInformationRequestEvidence](#acceptinformationrequestevidence) - Accept evidence for an information request
* [listInformationRequestActivity](#listinformationrequestactivity) - List information request activity
* [listCommentsForInformationRequest](#listcommentsforinformationrequest) - List comments for an information request
* [createCommentForInformationRequest](#createcommentforinformationrequest) - Create a comment for an information request
* [getCommentForInformationRequest](#getcommentforinformationrequest) - Get an information request comment by ID
* [updateCommentForInformationRequest](#updatecommentforinformationrequest) - Update a comment for an information request
* [deleteCommentForInformationRequest](#deletecommentforinformationrequest) - Delete a comment for an information request
* [listInformationRequestEvidence](#listinformationrequestevidence) - List evidence for an information request
* [getInformationRequestEvidence](#getinformationrequestevidence) - Get information request evidence by ID
* [getInformationRequestTestSnapshotEvidenceDetail](#getinformationrequesttestsnapshotevidencedetail) - Get test snapshot detail for an evidence row
* [flagInformationRequestEvidence](#flaginformationrequestevidence) - Flag evidence for an information request
* [listIntegrations](#listintegrations) - List integrations for an audit
* [listAuditIssues](#listauditissues) - List snapshotted issues for an audit
* [listAuditSnapshots](#listauditsnapshots) - List snapshotted issues for an audit
* [listVendors](#listvendors) - List vendors for an audit
* [~~listMonitoredComputersInAuditScope~~](#listmonitoredcomputersinauditscope) - List monitored computers :warning: **Deprecated**
* [getOrganizationInformation](#getorganizationinformation) - Get organization information for an audit
* [getOrganizationNotifications](#getorganizationnotifications) - Get organization notification settings for an audit
* [~~listPeopleInAuditScope~~](#listpeopleinauditscope) - List of people who are in scope for this audit :warning: **Deprecated**
* [listAccountAccessServices](#listaccountaccessservices) - List account access services for an audit
* [listPersonnelAccountAccess](#listpersonnelaccountaccess) - List account access records for an audit
* [listPersonnelGroups](#listpersonnelgroups) - List groups for an audit
* [listPersonnelPeople](#listpersonnelpeople) - List people for an audit
* [listRiskSnapshots](#listrisksnapshots) - List risk snapshots for an audit
* [listAuditRisks](#listauditrisks) - List risks for an audit
* [shareInformationRequestList](#shareinformationrequestlist) - Share information request list with customer
* [~~listVendorsInAuditScope~~](#listvendorsinauditscope) - List of vendors who are in scope for this audit :warning: **Deprecated**
* [~~listVulnerabilities~~](#listvulnerabilities) - List vulnerabilities within the scope of a given audit :warning: **Deprecated**
* [~~listVulnerabilityRemediationsInAuditScope~~](#listvulnerabilityremediationsinauditscope) - List vulnerability remediations that are in scope for this audit :warning: **Deprecated**
* [~~getVulnerableAssets~~](#getvulnerableassets) - List assets associated with vulnerabilities :warning: **Deprecated**

## list

Returns a paginated list of audits scoped to the audit firm.

To identify IRL (Information Request List) audits, check for the presence of the
`auditorRequestListMetadata` field. This field is only present for IRL-based audits
and will be `undefined` for standard audits.

Each audit includes `segments`, the audit's scope. A live single-framework
audit has one entry; a live multi-framework audit has one entry per
in-scope framework (and business unit or system, when applicable).
Soft-deleted audits return an empty list. The top-level `framework` field
is deprecated; use `segments` for in-scope frameworks.

Rate limit: 250 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListAudits" method="get" path="/audits" example="Example 1" -->
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

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsList } from "vanta-auditor-api-sdk/funcs/auditsList.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsList(vanta, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuditsRequest](../../models/operations/listauditsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseAudit](../../models/components/paginatedresponseaudit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## duplicate

Duplicates an existing IRL audit into a new audit engagement with the supplied
displayName, audit dates, early access date, and auditor roster. Company, audit
type, and framework are copied from the source audit and cannot be changed.

Each email in `allowAuditorEmails` must match an active user in the
authenticated audit firm's domain. Provision auditors via `POST /auditors`
before referencing them here, or copy emails from `GET /audits/{sourceAuditId}`
→ `allowAuditorEmails` when duplicating with the same roster.

Information requests are copied from the source audit. After duplication:

- Requests with Vanta evidence will be pre-filled and marked as internal review.

  Review them before sharing with your customer.
- Requests where evidence was not available or was uploaded externally will need

  evidence added manually.
- Evidence capture dates and due dates can be modified after duplication.

Audits with generated information requests can be duplicated only after their information
requests have been created successfully.

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Duplicate" method="post" path="/audits/duplicate" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.duplicate({
    sourceAuditId: "<id>",
    displayName: "Orpha.Schoen",
    auditStartDate: new Date("2024-01-02T08:34:53.150Z"),
    auditEndDate: new Date("2024-10-06T07:06:05.931Z"),
    earlyAccessStartsAt: new Date("2025-05-31T02:08:59.254Z"),
    allowAuditorEmails: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsDuplicate } from "vanta-auditor-api-sdk/funcs/auditsDuplicate.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsDuplicate(vanta, {
    sourceAuditId: "<id>",
    displayName: "Orpha.Schoen",
    auditStartDate: new Date("2024-01-02T08:34:53.150Z"),
    auditEndDate: new Date("2024-10-06T07:06:05.931Z"),
    earlyAccessStartsAt: new Date("2025-05-31T02:08:59.254Z"),
    allowAuditorEmails: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsDuplicate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DuplicateAuditRequest](../../models/components/duplicateauditrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Audit](../../models/components/audit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getAudit

Returns a single audit by ID, scoped to the audit firm.

To identify IRL (Information Request List) audits, check for the presence of the
`auditorRequestListMetadata` field. This field is only present for IRL-based audits
and will be `undefined` for standard audits.

The response includes `segments`, the audit's scope. A live single-framework
audit has one entry; a live multi-framework audit has one entry per
in-scope framework (and business unit or system, when applicable).
Soft-deleted audits return an empty list. The top-level `framework` field
is deprecated; use `segments` for in-scope frameworks.

Rate limit: 250 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAudit" method="get" path="/audits/{auditId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getAudit({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetAudit } from "vanta-auditor-api-sdk/funcs/auditsGetAudit.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetAudit(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetAudit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAuditRequest](../../models/operations/getauditrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Audit](../../models/components/audit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listCodeChanges

Retrieves code changes population data for an audit.

This endpoint provides access to code change records (pull requests)
visible to auditors during an audit engagement.

Supports filtering by:
- `search`: Searches code change titles and repository names (case-insensitive)
- `sourcesMatchesAny`: Filters by version control source (accepted values: github, gitlab, bitbucket, azuredevops)
- `closedAfterDate` / `closedBeforeDate`: Filters by the closed date range

Uses cursor-based pagination. To paginate:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage`
3. Use `results.pageInfo.endCursor` as `pageCursor` for next request

Results are sorted by closed date (newest first). This sort order is
fixed and cannot be customized via query parameters.

Returns 422 when the audit does not have exactly one program segment
(multi-framework audits are not supported on this endpoint).

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListCodeChanges" method="get" path="/audits/{auditId}/assets/code-changes" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listCodeChanges({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListCodeChanges } from "vanta-auditor-api-sdk/funcs/auditsListCodeChanges.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListCodeChanges(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListCodeChanges failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCodeChangesRequest](../../models/operations/listcodechangesrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseCodeChange](../../models/components/paginatedresponsecodechange.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listComments

Returns a paginated list of comments for an audit.

Rate limit: 250 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListAuditComments" method="get" path="/audits/{auditId}/comments" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listComments({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListComments } from "vanta-auditor-api-sdk/funcs/auditsListComments.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListComments(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListComments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuditCommentsRequest](../../models/operations/listauditcommentsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseComment](../../models/components/paginatedresponsecomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listControls

Returns a paginated list of controls for an audit.

Rate limit: 250 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListAuditControls" method="get" path="/audits/{auditId}/controls" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listControls({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListControls } from "vanta-auditor-api-sdk/funcs/auditsListControls.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListControls(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListControls failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuditControlsRequest](../../models/operations/listauditcontrolsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseAuditorControl](../../models/components/paginatedresponseauditorcontrol.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createCustomControl

Create a custom control for an audit.

This endpoint supports classic audits only. Audits that use information request
lists (IRL) are not supported and return a 422 error.

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateCustomControl" method="post" path="/audits/{auditId}/controls/custom-controls" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.createCustomControl({
    auditId: "<id>",
    createCustomControlInput: {
      externalId: "<id>",
      name: null,
      description: "yet plus utter queasily what juvenile wound",
      effectiveDate: new Date("2024-11-10T13:58:54.564Z"),
      category: "CLOUD_SECURITY",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsCreateCustomControl } from "vanta-auditor-api-sdk/funcs/auditsCreateCustomControl.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsCreateCustomControl(vanta, {
    auditId: "<id>",
    createCustomControlInput: {
      externalId: "<id>",
      name: null,
      description: "yet plus utter queasily what juvenile wound",
      effectiveDate: new Date("2024-11-10T13:58:54.564Z"),
      category: "CLOUD_SECURITY",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsCreateCustomControl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCustomControlRequest](../../models/operations/createcustomcontrolrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Control](../../models/components/control.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## upsertAssessmentForControl

Records (upserts) an auditor's assessment state and justification for a
control within an IRL audit — the API equivalent of assessing a control in
the web app. Overwrites the assessment for this control in the chosen
program segment.

`segmentId` is required when the audit has more than one program segment.
On a single-program audit it may be omitted. The `assessmentState` must be
valid for that segment's framework (the request is rejected otherwise). The
acting auditor is identified by `auditorEmail`, which must belong to the
audit firm making the request.

Returns 404 when the control is not part of the audit or the auditor email
does not resolve to a firm user. Returns 422 when `segmentId` is missing on
a multi-program audit, is not a program segment on the audit, or the
control is not assessment-eligible in that segment. Applies to both Full
and Controlled Audit View audits.

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpsertAssessmentForControl" method="put" path="/audits/{auditId}/controls/{controlId}/assessment" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.upsertAssessmentForControl({
    auditId: "<id>",
    controlId: "<id>",
    upsertAuditControlAssessmentInput: {
      assessmentState: "TRUE",
      justification: "<value>",
      auditorEmail: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsUpsertAssessmentForControl } from "vanta-auditor-api-sdk/funcs/auditsUpsertAssessmentForControl.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsUpsertAssessmentForControl(vanta, {
    auditId: "<id>",
    controlId: "<id>",
    upsertAuditControlAssessmentInput: {
      assessmentState: "TRUE",
      justification: "<value>",
      auditorEmail: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsUpsertAssessmentForControl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpsertAssessmentForControlRequest](../../models/operations/upsertassessmentforcontrolrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AuditorControlAssessment](../../models/components/auditorcontrolassessment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listCommentsForControl

Retrieves a paginated list of comments on a control within an IRL audit,
enabling auditors to view collaboration history on the control.

This endpoint always includes soft-deleted records (where `deletionDate !== null`).
Clients should check the `deletionDate` field to identify and handle deleted records
appropriately in their systems.

This endpoint supports delta synchronization via the `changedSinceDate` parameter,
allowing efficient polling for changes without retrieving the entire dataset.

Returns 404 when the control is not part of the audit.

Pagination usage:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage` to see if more data exists
3. If true, use `results.pageInfo.endCursor` as `pageCursor` in next request
4. Repeat until `hasNextPage` is false

Delta sync usage:
1. Store the timestamp of your last sync
2. Pass that timestamp as `changedSinceDate`
3. Only comments created, modified, or deleted since that timestamp are returned
4. Process updates, including soft-deletes (deletionDate !== null)
5. Update your last sync timestamp to the current time

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListCommentsForControl" method="get" path="/audits/{auditId}/controls/{controlId}/comments" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listCommentsForControl({
    auditId: "<id>",
    controlId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListCommentsForControl } from "vanta-auditor-api-sdk/funcs/auditsListCommentsForControl.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListCommentsForControl(vanta, {
    auditId: "<id>",
    controlId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListCommentsForControl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommentsForControlRequest](../../models/operations/listcommentsforcontrolrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseAuditControlComment](../../models/components/paginatedresponseauditcontrolcomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createCommentForControl

Creates a new comment on a control within an IRL audit. The comment author
must be an auditor in the audit firm making the request. The comment will be
associated with the control and visible to all authorized users.

Returns 404 when the control is not part of the audit.

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateCommentForControl" method="post" path="/audits/{auditId}/controls/{controlId}/comments" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.createCommentForControl({
    auditId: "<id>",
    controlId: "<id>",
    addAuditControlCommentInput: {
      text: "<value>",
      email: "Justice.Konopelski@hotmail.com",
      creationDate: new Date("2024-04-23T18:18:35.232Z"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsCreateCommentForControl } from "vanta-auditor-api-sdk/funcs/auditsCreateCommentForControl.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsCreateCommentForControl(vanta, {
    auditId: "<id>",
    controlId: "<id>",
    addAuditControlCommentInput: {
      text: "<value>",
      email: "Justice.Konopelski@hotmail.com",
      creationDate: new Date("2024-04-23T18:18:35.232Z"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsCreateCommentForControl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommentForControlRequest](../../models/operations/createcommentforcontrolrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AuditControlComment](../../models/components/auditcontrolcomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateCommentForControl

Updates an existing comment on a control. Only the original author
of the comment can update it. The author is identified by their email address,
which must match the email of the user who created the comment.

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateCommentForControl" method="patch" path="/audits/{auditId}/controls/{controlId}/comments/{commentId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.updateCommentForControl({
    auditId: "<id>",
    controlId: "<id>",
    commentId: "<id>",
    updateAuditControlCommentInput: {
      text: "<value>",
      email: "Leonardo71@hotmail.com",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsUpdateCommentForControl } from "vanta-auditor-api-sdk/funcs/auditsUpdateCommentForControl.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsUpdateCommentForControl(vanta, {
    auditId: "<id>",
    controlId: "<id>",
    commentId: "<id>",
    updateAuditControlCommentInput: {
      text: "<value>",
      email: "Leonardo71@hotmail.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsUpdateCommentForControl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommentForControlRequest](../../models/operations/updatecommentforcontrolrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AuditControlComment](../../models/components/auditcontrolcomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteCommentForControl

Deletes an existing comment on a control. Only the original author
of the comment can delete it. The author is identified by their email address,
which must match the email of the user who created the comment.

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeleteCommentForControl" method="delete" path="/audits/{auditId}/controls/{controlId}/comments/{commentId}" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  await vanta.audits.deleteCommentForControl({
    auditId: "<id>",
    controlId: "<id>",
    commentId: "<id>",
    deleteAuditControlCommentInput: {
      email: "Lorenzo.Ondricka@yahoo.com",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsDeleteCommentForControl } from "vanta-auditor-api-sdk/funcs/auditsDeleteCommentForControl.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsDeleteCommentForControl(vanta, {
    auditId: "<id>",
    controlId: "<id>",
    commentId: "<id>",
    deleteAuditControlCommentInput: {
      email: "Lorenzo.Ondricka@yahoo.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("auditsDeleteCommentForControl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCommentForControlRequest](../../models/operations/deletecommentforcontrolrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listInformationRequestsForControl

Returns a paginated list of active information requests linked to a specific
control within an IRL audit. Only links saved on the audit's current
control rows are included.

Soft-deleted information requests are not included in the response. To
synchronize deletions, use `GET /audits/{auditId}/information-requests`,
which supports `changedSinceDate` and includes soft-deleted records.

Returns 404 when the control is not part of the audit. Returns an empty page
when the control is part of the audit but has no active IRLs linked to it.

Pagination usage:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage` to see if more data exists
3. If true, use `results.pageInfo.endCursor` as `pageCursor` in next request
4. Repeat until `hasNextPage` is false

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListInformationRequestsForControl" method="get" path="/audits/{auditId}/controls/{controlId}/information-requests" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listInformationRequestsForControl({
    auditId: "<id>",
    controlId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListInformationRequestsForControl } from "vanta-auditor-api-sdk/funcs/auditsListInformationRequestsForControl.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListInformationRequestsForControl(vanta, {
    auditId: "<id>",
    controlId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListInformationRequestsForControl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListInformationRequestsForControlRequest](../../models/operations/listinformationrequestsforcontrolrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseInformationRequest](../../models/components/paginatedresponseinformationrequest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listEvidence

Returns a paginated list of evidence for an audit.

Rate limit: 250 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListAuditEvidence" method="get" path="/audits/{auditId}/evidence" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listEvidence({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListEvidence } from "vanta-auditor-api-sdk/funcs/auditsListEvidence.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListEvidence(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListEvidence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuditEvidenceRequest](../../models/operations/listauditevidencerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseEvidence](../../models/components/paginatedresponseevidence.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createCustomEvidenceRequest

Create a custom evidence request for an audit.

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateCustomEvidenceRequest" method="post" path="/audits/{auditId}/evidence/custom-evidence-requests" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.createCustomEvidenceRequest({
    auditId: "<id>",
    createCustomEvidenceRequestInput: {
      controlIds: [
        "<value 1>",
        "<value 2>",
      ],
      title: "<value>",
      description: "pure bludgeon deliberately question although",
      cadence: "P1D",
      reminderWindow: "P0D",
      isRestricted: false,
      auditorEmail: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsCreateCustomEvidenceRequest } from "vanta-auditor-api-sdk/funcs/auditsCreateCustomEvidenceRequest.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsCreateCustomEvidenceRequest(vanta, {
    auditId: "<id>",
    createCustomEvidenceRequestInput: {
      controlIds: [
        "<value 1>",
        "<value 2>",
      ],
      title: "<value>",
      description: "pure bludgeon deliberately question although",
      cadence: "P1D",
      reminderWindow: "P0D",
      isRestricted: false,
      auditorEmail: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsCreateCustomEvidenceRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCustomEvidenceRequestRequest](../../models/operations/createcustomevidencerequestrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomEvidenceRequest](../../models/components/customevidencerequest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateEvidence

Update audit evidence.

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateAuditEvidence" method="patch" path="/audits/{auditId}/evidence/{auditEvidenceId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.updateEvidence({
    auditId: "<id>",
    auditEvidenceId: "<id>",
    auditEvidenceUpdateInput: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsUpdateEvidence } from "vanta-auditor-api-sdk/funcs/auditsUpdateEvidence.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsUpdateEvidence(vanta, {
    auditId: "<id>",
    auditEvidenceId: "<id>",
    auditEvidenceUpdateInput: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsUpdateEvidence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAuditEvidenceRequest](../../models/operations/updateauditevidencerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Evidence](../../models/components/evidence.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getAuditEvidence

Retrieves a single classic audit evidence item by its ID, scoped to its
audit. The response matches the entry `GET /audits/{auditId}/evidence`
returns for the same item, so an evidence ID surfaced by a webhook can be
resolved directly instead of paging the audit's full evidence list.

Soft-deleted evidence (where `deletionDate !== null`) is included in the
response. Clients should check `deletionDate` to determine whether the item
has been deleted. This matches `GET /audits/{auditId}/evidence`, which
supports `changedSinceDate` and returns soft-deleted evidence for delta
sync. As on the list endpoint, `description` is null for deleted items.

Rate limit: 250 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAuditEvidence" method="get" path="/audits/{auditId}/evidence/{auditEvidenceId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getAuditEvidence({
    auditId: "<id>",
    auditEvidenceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetAuditEvidence } from "vanta-auditor-api-sdk/funcs/auditsGetAuditEvidence.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetAuditEvidence(vanta, {
    auditId: "<id>",
    auditEvidenceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetAuditEvidence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAuditEvidenceRequest](../../models/operations/getauditevidencerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Evidence](../../models/components/evidence.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createCommentForEvidence

Create a comment in Vanta for a piece of evidence.

Rate limit: 25 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateCommentForAuditEvidence" method="post" path="/audits/{auditId}/evidence/{auditEvidenceId}/comments" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.createCommentForEvidence({
    auditId: "<id>",
    auditEvidenceId: "<id>",
    addCommentInput: {
      text: "<value>",
      email: "Carmen.Bogan@yahoo.com",
      creationDate: new Date("2024-05-28T11:04:29.369Z"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsCreateCommentForEvidence } from "vanta-auditor-api-sdk/funcs/auditsCreateCommentForEvidence.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsCreateCommentForEvidence(vanta, {
    auditId: "<id>",
    auditEvidenceId: "<id>",
    addCommentInput: {
      text: "<value>",
      email: "Carmen.Bogan@yahoo.com",
      creationDate: new Date("2024-05-28T11:04:29.369Z"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsCreateCommentForEvidence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommentForAuditEvidenceRequest](../../models/operations/createcommentforauditevidencerequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Comment](../../models/components/comment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getAuditEvidenceComment

Retrieves a single comment on a classic audit evidence item by its ID.

Soft-deleted comments (where `deletionDate !== null`) are included in the
response. Clients should check `deletionDate` to determine whether the
comment has been deleted. This matches
`GET /audits/{auditId}/comments`, which supports `changedSinceDate` and
returns soft-deleted comments for delta sync.

Comments remain fetchable when the parent evidence item has been
soft-deleted, so delayed webhook consumers can still resolve a comment ID
after evidence deletion.

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetAuditEvidenceComment" method="get" path="/audits/{auditId}/evidence/{auditEvidenceId}/comments/{commentId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getAuditEvidenceComment({
    auditId: "<id>",
    auditEvidenceId: "<id>",
    commentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetAuditEvidenceComment } from "vanta-auditor-api-sdk/funcs/auditsGetAuditEvidenceComment.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetAuditEvidenceComment(vanta, {
    auditId: "<id>",
    auditEvidenceId: "<id>",
    commentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetAuditEvidenceComment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAuditEvidenceCommentRequest](../../models/operations/getauditevidencecommentrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Comment](../../models/components/comment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getEvidenceUrls

Returns a paginated list of evidence urls for an audit. This endpoint should be called whenever an
evidence is created or has a statusUpdatedAt field that is more recent than the most recent polling event.

Evidence must be in one of the following states to retrieve URLs: "Ready for audit", "Accepted", "Flagged", or "NA".

Returns 422 when the audit does not have exactly one program segment
(multi-framework audits are not supported on this endpoint).

Rate limit: 600 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListAuditEvidenceUrls" method="get" path="/audits/{auditId}/evidence/{auditEvidenceId}/urls" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getEvidenceUrls({
    auditId: "<id>",
    auditEvidenceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetEvidenceUrls } from "vanta-auditor-api-sdk/funcs/auditsGetEvidenceUrls.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetEvidenceUrls(vanta, {
    auditId: "<id>",
    auditEvidenceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetEvidenceUrls failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuditEvidenceUrlsRequest](../../models/operations/listauditevidenceurlsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseEvidenceUrl](../../models/components/paginatedresponseevidenceurl.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getFrameworkCodes

Retrieves all valid framework codes for the specified audit. This endpoint helps users discover which framework codes are available for creating and updating information requests for this audit.

Use this endpoint to:
- Discover available framework codes (`frameworkCodes`, the original flat list)
- Validate framework codes against the audit's frameworks
- See which codes belong to which in-scope framework (`codesByFramework`)

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetFrameworkCodes" method="get" path="/audits/{auditId}/framework-codes" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getFrameworkCodes({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetFrameworkCodes } from "vanta-auditor-api-sdk/funcs/auditsGetFrameworkCodes.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetFrameworkCodes(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetFrameworkCodes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFrameworkCodesRequest](../../models/operations/getframeworkcodesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FrameworkCodes](../../models/components/frameworkcodes.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listInformationRequests

Retrieves a paginated list of all information requests for an audit, enabling
external audit management systems to display and track evidence requests.

This endpoint always includes soft-deleted records (where `deletionDate !== null`).
Clients should check the `deletionDate` field to identify and handle deleted records
appropriately in their systems.

This endpoint supports delta synchronization via the `changedSinceDate` parameter,
allowing efficient polling for changes without retrieving the entire dataset.

Pagination usage:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage` to see if more data exists
3. If true, use `results.pageInfo.endCursor` as `pageCursor` in next request
4. Repeat until `hasNextPage` is false

Delta sync usage:
1. Store the timestamp of your last sync
2. Pass that timestamp as `changedSinceDate`
3. Only requests created, modified, or deleted since that timestamp are returned
4. Process updates and soft-deletes by checking the `deletionDate` field
5. Update your last sync timestamp to the current time

`segmentIds` on each returned request is resolved against the audit's
current scope. A scope-only change (a segment leaving or joining the audit
without the request row being written) is not a delta-sync event. Re-fetch
without `changedSinceDate`, or GET by id, to see the current projection.

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListInformationRequests" method="get" path="/audits/{auditId}/information-requests" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listInformationRequests({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListInformationRequests } from "vanta-auditor-api-sdk/funcs/auditsListInformationRequests.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListInformationRequests(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListInformationRequests failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListInformationRequestsRequest](../../models/operations/listinformationrequestsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseInformationRequest](../../models/components/paginatedresponseinformationrequest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createInformationRequest

Creates a new information request for an audit during audit setup or as requirements evolve.

After creating all information requests, use POST /audits/{auditId}/share-information-request-list
to make them visible to the customer organization. Until shared, requests remain in draft state
visible only to auditors.

New requests are created in an initial state indicating evidence is needed. The status
progresses through the workflow: initial state → awaiting review → approved or flagged.

Rate limit: 600 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateInformationRequest" method="post" path="/audits/{auditId}/information-requests" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.createInformationRequest({
    auditId: "<id>",
    createInformationRequestInput: {
      uniqueId: "<id>",
      title: "<value>",
      requestType: "SAMPLE",
      frameworkCodes: [],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsCreateInformationRequest } from "vanta-auditor-api-sdk/funcs/auditsCreateInformationRequest.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsCreateInformationRequest(vanta, {
    auditId: "<id>",
    createInformationRequestInput: {
      uniqueId: "<id>",
      title: "<value>",
      requestType: "SAMPLE",
      frameworkCodes: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsCreateInformationRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateInformationRequestRequest](../../models/operations/createinformationrequestrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InformationRequest](../../models/components/informationrequest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getInformationRequest

Retrieves a single information request by its ID for an audit, allowing external
audit management systems to fetch the latest state of a specific request without
paginating through the full list.

Soft-deleted records (where `deletionDate !== null`) are included in the response.
Clients should check `deletionDate` to determine whether the request has been deleted.

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetInformationRequest" method="get" path="/audits/{auditId}/information-requests/{requestId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getInformationRequest({
    auditId: "<id>",
    requestId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetInformationRequest } from "vanta-auditor-api-sdk/funcs/auditsGetInformationRequest.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetInformationRequest(vanta, {
    auditId: "<id>",
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetInformationRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetInformationRequestRequest](../../models/operations/getinformationrequestrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InformationRequest](../../models/components/informationrequest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateInformationRequest

Updates an existing information request for an audit, allowing modification of request
details as audit requirements evolve. Supports partial updates where only specified
fields are changed; omitted fields remain unchanged.

Common use cases:
- Updating due dates as audit timelines shift
- Refining descriptions to clarify requirements
- Adjusting request type

Note: The `modificationDate` is automatically updated to the current timestamp
when any field is changed.

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateInformationRequest" method="patch" path="/audits/{auditId}/information-requests/{requestId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.updateInformationRequest({
    auditId: "<id>",
    requestId: "<id>",
    partialUpdateInformationRequest: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsUpdateInformationRequest } from "vanta-auditor-api-sdk/funcs/auditsUpdateInformationRequest.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsUpdateInformationRequest(vanta, {
    auditId: "<id>",
    requestId: "<id>",
    partialUpdateInformationRequest: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsUpdateInformationRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateInformationRequestRequest](../../models/operations/updateinformationrequestrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InformationRequest](../../models/components/informationrequest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteInformationRequest

Deletes an information request for an audit. This performs a soft delete, marking
the request as deleted (setting `deletionDate`) while preserving it in the system
for audit history and compliance tracking.

Soft deletion allows:
- Maintaining complete audit trail of all requests ever created
- Retrieving deleted requests via `changedSinceDate` for synchronization

After deletion:
- The request will not appear in normal list responses (without `changedSinceDate`)
- The request's `deletionDate` field will be populated

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeleteInformationRequest" method="delete" path="/audits/{auditId}/information-requests/{requestId}" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  await vanta.audits.deleteInformationRequest({
    auditId: "<id>",
    requestId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsDeleteInformationRequest } from "vanta-auditor-api-sdk/funcs/auditsDeleteInformationRequest.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsDeleteInformationRequest(vanta, {
    auditId: "<id>",
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("auditsDeleteInformationRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteInformationRequestRequest](../../models/operations/deleteinformationrequestrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## acceptInformationRequestEvidence

Accepts evidence for an information request, confirming that all submitted evidence
meets audit requirements. This action changes the request's approvalStatus to
an approved state and creates an activity log entry.

Acceptance workflow:
1. Auditor reviews submitted evidence
2. If evidence is satisfactory, auditor calls this endpoint
3. Request status changes to approved state and is considered complete for this audit cycle

Use this endpoint when:
- All required evidence has been submitted
- Evidence quality meets audit standards
- Evidence addresses all specified framework codes
- No additional information is needed

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AcceptInformationRequestEvidence" method="post" path="/audits/{auditId}/information-requests/{requestId}/accept-evidence" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.acceptInformationRequestEvidence({
    auditId: "<id>",
    requestId: "<id>",
    acceptInformationRequestEvidenceInput: {
      auditorEmail: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsAcceptInformationRequestEvidence } from "vanta-auditor-api-sdk/funcs/auditsAcceptInformationRequestEvidence.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsAcceptInformationRequestEvidence(vanta, {
    auditId: "<id>",
    requestId: "<id>",
    acceptInformationRequestEvidenceInput: {
      auditorEmail: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsAcceptInformationRequestEvidence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AcceptInformationRequestEvidenceRequest](../../models/operations/acceptinformationrequestevidencerequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InformationRequest](../../models/components/informationrequest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listInformationRequestActivity

Retrieves a paginated list of activity logs for an information request, providing
a complete audit trail of all changes and actions.

This endpoint supports delta synchronization via the `changedSinceDate` parameter,
allowing efficient polling for changes without retrieving the entire dataset.

Pagination usage:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage` to see if more data exists
3. If true, use `results.pageInfo.endCursor` as `pageCursor` in next request
4. Repeat until `hasNextPage` is false

Delta sync usage:
1. Store the timestamp of your last sync
2. Pass that timestamp as `changedSinceDate`
3. Only activity created since that timestamp is returned
4. Process updates to track all changes to the information request
5. Update your last sync timestamp to the current time

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListInformationRequestActivity" method="get" path="/audits/{auditId}/information-requests/{requestId}/activity" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listInformationRequestActivity({
    auditId: "<id>",
    requestId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListInformationRequestActivity } from "vanta-auditor-api-sdk/funcs/auditsListInformationRequestActivity.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListInformationRequestActivity(vanta, {
    auditId: "<id>",
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListInformationRequestActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListInformationRequestActivityRequest](../../models/operations/listinformationrequestactivityrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseInformationRequestActivityLog](../../models/components/paginatedresponseinformationrequestactivitylog.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listCommentsForInformationRequest

Retrieves a paginated list of comments for an information request, enabling
auditors to view communication history and collaborate with customers.

This endpoint always includes soft-deleted records (where `deletionDate !== null`).
Clients should check the `deletionDate` field to identify and handle deleted records
appropriately in their systems.

This endpoint supports delta synchronization via the `changedSinceDate` parameter,
allowing efficient polling for changes without retrieving the entire dataset.

Pagination usage:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage` to see if more data exists
3. If true, use `results.pageInfo.endCursor` as `pageCursor` in next request
4. Repeat until `hasNextPage` is false

Delta sync usage:
1. Store the timestamp of your last sync
2. Pass that timestamp as `changedSinceDate`
3. Only comments created, modified, or deleted since that timestamp are returned
4. Process updates, including soft-deletes (deletionDate !== null)
5. Update your last sync timestamp to the current time

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListCommentsForInformationRequest" method="get" path="/audits/{auditId}/information-requests/{requestId}/comments" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listCommentsForInformationRequest({
    auditId: "<id>",
    requestId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListCommentsForInformationRequest } from "vanta-auditor-api-sdk/funcs/auditsListCommentsForInformationRequest.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListCommentsForInformationRequest(vanta, {
    auditId: "<id>",
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListCommentsForInformationRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommentsForInformationRequestRequest](../../models/operations/listcommentsforinformationrequestrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseInformationRequestComment](../../models/components/paginatedresponseinformationrequestcomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createCommentForInformationRequest

Creates a new comment for an information request. The comment author must be an auditor
in the audit firm making the request. The comment will be associated with the information
request and visible to all authorized users.

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CreateCommentForInformationRequest" method="post" path="/audits/{auditId}/information-requests/{requestId}/comments" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.createCommentForInformationRequest({
    auditId: "<id>",
    requestId: "<id>",
    addInformationRequestCommentInput: {
      text: "<value>",
      email: "Daryl.Bartell38@gmail.com",
      creationDate: new Date("2024-06-25T05:04:31.105Z"),
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsCreateCommentForInformationRequest } from "vanta-auditor-api-sdk/funcs/auditsCreateCommentForInformationRequest.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsCreateCommentForInformationRequest(vanta, {
    auditId: "<id>",
    requestId: "<id>",
    addInformationRequestCommentInput: {
      text: "<value>",
      email: "Daryl.Bartell38@gmail.com",
      creationDate: new Date("2024-06-25T05:04:31.105Z"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsCreateCommentForInformationRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommentForInformationRequestRequest](../../models/operations/createcommentforinformationrequestrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InformationRequestComment](../../models/components/informationrequestcomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getCommentForInformationRequest

Retrieves a single comment on an information request by its ID.

Soft-deleted comments (where `deletionDate !== null`) are included in the
response. Clients should check `deletionDate` to determine whether the
comment has been deleted. This matches
`GET /audits/{auditId}/information-requests/{requestId}/comments`, which
supports `changedSinceDate` and returns soft-deleted comments for delta sync.

Comments remain fetchable when the parent information request has been
soft-deleted, so delayed webhook consumers can still resolve a comment ID
after the request is deleted.

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetCommentForInformationRequest" method="get" path="/audits/{auditId}/information-requests/{requestId}/comments/{commentId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getCommentForInformationRequest({
    auditId: "<id>",
    requestId: "<id>",
    commentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetCommentForInformationRequest } from "vanta-auditor-api-sdk/funcs/auditsGetCommentForInformationRequest.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetCommentForInformationRequest(vanta, {
    auditId: "<id>",
    requestId: "<id>",
    commentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetCommentForInformationRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommentForInformationRequestRequest](../../models/operations/getcommentforinformationrequestrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InformationRequestComment](../../models/components/informationrequestcomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateCommentForInformationRequest

Updates an existing comment for an information request. Only the original author
of the comment can update it. The author is identified by their email address,
which must match the email of the user who created the comment.

Rate limit: 25 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="UpdateCommentForInformationRequest" method="patch" path="/audits/{auditId}/information-requests/{requestId}/comments/{commentId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.updateCommentForInformationRequest({
    auditId: "<id>",
    requestId: "<id>",
    commentId: "<id>",
    updateInformationRequestCommentInput: {
      text: "<value>",
      email: "Gerald_Gusikowski36@yahoo.com",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsUpdateCommentForInformationRequest } from "vanta-auditor-api-sdk/funcs/auditsUpdateCommentForInformationRequest.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsUpdateCommentForInformationRequest(vanta, {
    auditId: "<id>",
    requestId: "<id>",
    commentId: "<id>",
    updateInformationRequestCommentInput: {
      text: "<value>",
      email: "Gerald_Gusikowski36@yahoo.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsUpdateCommentForInformationRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommentForInformationRequestRequest](../../models/operations/updatecommentforinformationrequestrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InformationRequestComment](../../models/components/informationrequestcomment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteCommentForInformationRequest

Deletes an existing comment for an information request. Only the original author
of the comment can delete it. The author is identified by their email address,
which must match the email of the user who created the comment.

Rate limit: 25 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="DeleteCommentForInformationRequest" method="delete" path="/audits/{auditId}/information-requests/{requestId}/comments/{commentId}" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  await vanta.audits.deleteCommentForInformationRequest({
    auditId: "<id>",
    requestId: "<id>",
    commentId: "<id>",
    deleteInformationRequestCommentInput: {
      email: "Ole.Adams@gmail.com",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsDeleteCommentForInformationRequest } from "vanta-auditor-api-sdk/funcs/auditsDeleteCommentForInformationRequest.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsDeleteCommentForInformationRequest(vanta, {
    auditId: "<id>",
    requestId: "<id>",
    commentId: "<id>",
    deleteInformationRequestCommentInput: {
      email: "Ole.Adams@gmail.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("auditsDeleteCommentForInformationRequest failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteCommentForInformationRequestRequest](../../models/operations/deletecommentforinformationrequestrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listInformationRequestEvidence

Retrieves a paginated list of all evidence attached to an information request,
enabling auditors to review evidence submitted by customers.

This endpoint always includes soft-deleted records (where `deletionDate !== null`).
Clients should check the `deletionDate` field to identify and handle deleted records
appropriately in their systems.

This endpoint supports delta synchronization via the `changedSinceDate` parameter,
allowing efficient polling for changes without retrieving the entire dataset.

Pagination usage:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage` to see if more data exists
3. If true, use `results.pageInfo.endCursor` as `pageCursor` in next request
4. Repeat until `hasNextPage` is false

Delta sync usage:
1. Store the timestamp of your last sync
2. Pass that timestamp as `changedSinceDate`
3. Only evidence created, modified, shared, or deleted since that timestamp is returned
4. Process updates, including soft-deletes (deletionDate !== null)
5. Update your last sync timestamp to the current time

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListInformationRequestEvidence" method="get" path="/audits/{auditId}/information-requests/{requestId}/evidence" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listInformationRequestEvidence({
    auditId: "<id>",
    requestId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListInformationRequestEvidence } from "vanta-auditor-api-sdk/funcs/auditsListInformationRequestEvidence.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListInformationRequestEvidence(vanta, {
    auditId: "<id>",
    requestId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListInformationRequestEvidence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListInformationRequestEvidenceRequest](../../models/operations/listinformationrequestevidencerequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseInformationRequestEvidence](../../models/components/paginatedresponseinformationrequestevidence.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getInformationRequestEvidence

Retrieves a single evidence item attached to an information request by its ID.

This endpoint always includes soft-deleted evidence (where `deletionDate !== null`),
so an evidence ID surfaced by a `changedSinceDate` delta sync stays fetchable after
the evidence is deleted. Clients should check the `deletionDate` field to identify
and handle deleted records appropriately in their systems.

Evidence is only resolvable while its information request exists. Once the
request itself is deleted, this endpoint reports the request as not found —
matching `GET /audits/{auditId}/information-requests/{requestId}/evidence`.
Clients reconciling a deleted request should treat its evidence as gone with it.

Evidence that the customer has not shared with the auditor is reported as not
found, rather than distinguishing it from an ID that does not exist.

Rate limit: 250 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetInformationRequestEvidence" method="get" path="/audits/{auditId}/information-requests/{requestId}/evidence/{evidenceId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getInformationRequestEvidence({
    auditId: "<id>",
    requestId: "<id>",
    evidenceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetInformationRequestEvidence } from "vanta-auditor-api-sdk/funcs/auditsGetInformationRequestEvidence.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetInformationRequestEvidence(vanta, {
    auditId: "<id>",
    requestId: "<id>",
    evidenceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetInformationRequestEvidence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetInformationRequestEvidenceRequest](../../models/operations/getinformationrequestevidencerequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InformationRequestEvidence](../../models/components/informationrequestevidence.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getInformationRequestTestSnapshotEvidenceDetail

Retrieves the rich detail for a single VANTA_TEST_SNAPSHOT evidence row
attached to an information request. The response includes test-level
metadata (description, integrations, SLA), the raw test data captured
at snapshot time, and the resources that were excluded from the test
(out-of-scope resources).

For structured snapshots, the `rawTestData` array contains one row per
resource the test ran against; each row carries `resourceId`,
`resourceType`, and the raw JSON for that resource.

For unstructured snapshots, the `rawTestData` array contains a single
row with `resourceId` and `resourceType` set to `null` and `rawJson`
containing the entire test-run JSON blob.

The `outOfScopeResources` field lists resources excluded at the test
level (customer-disabled) and the framework level (segment
configuration). Empty exclusion groups are filtered out.

The `apiRequests` array contains the HTTP requests captured during API
introspection tests. Empty when the test does not perform API
introspection.

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetInformationRequestTestSnapshotEvidenceDetail" method="get" path="/audits/{auditId}/information-requests/{requestId}/evidence/{evidenceId}/test-snapshot" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getInformationRequestTestSnapshotEvidenceDetail({
    auditId: "<id>",
    requestId: "<id>",
    evidenceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetInformationRequestTestSnapshotEvidenceDetail } from "vanta-auditor-api-sdk/funcs/auditsGetInformationRequestTestSnapshotEvidenceDetail.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetInformationRequestTestSnapshotEvidenceDetail(vanta, {
    auditId: "<id>",
    requestId: "<id>",
    evidenceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetInformationRequestTestSnapshotEvidenceDetail failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetInformationRequestTestSnapshotEvidenceDetailRequest](../../models/operations/getinformationrequesttestsnapshotevidencedetailrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.VantaTestSnapshotEvidenceDetail](../../models/components/vantatestsnapshotevidencedetail.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## flagInformationRequestEvidence

Flags evidence for an information request when it doesn't meet audit requirements,
marking issues that need to be addressed before approval. This action changes the
request's approvalStatus to a flagged state and creates an activity log entry.

Flagging workflow:
1. Auditor reviews submitted evidence
2. If issues are found, auditor calls this endpoint with detailed reason
3. Request status changes to flagged state
4. Customer is notified and can see the reason in activity logs
5. Customer addresses issues and updates evidence
6. When ready, customer changes status back to awaiting review
7. Auditor reviews again and either flags again or accepts

The `reason` field should clearly explain what's missing or incorrect so the
customer knows exactly what to fix. This reason is visible to the customer
and appears in the activity log.

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="FlagInformationRequestEvidence" method="post" path="/audits/{auditId}/information-requests/{requestId}/flag-evidence" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.flagInformationRequestEvidence({
    auditId: "<id>",
    requestId: "<id>",
    flagInformationRequestEvidenceInput: {
      auditorEmail: "<value>",
      reason: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsFlagInformationRequestEvidence } from "vanta-auditor-api-sdk/funcs/auditsFlagInformationRequestEvidence.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsFlagInformationRequestEvidence(vanta, {
    auditId: "<id>",
    requestId: "<id>",
    flagInformationRequestEvidenceInput: {
      auditorEmail: "<value>",
      reason: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsFlagInformationRequestEvidence failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FlagInformationRequestEvidenceRequest](../../models/operations/flaginformationrequestevidencerequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.InformationRequest](../../models/components/informationrequest.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listIntegrations

Retrieves integration population data for an audit.

This endpoint provides access to integration records visible to auditors
during an audit engagement. Integrations represent connected services
(e.g., GitHub, AWS, Slack) that provide data for the audit.

Supports filtering by:
- `search`: Searches integration names (case-insensitive)
- `tagsMatchesAny`: Filters by integration tag (ACCESS, COMPUTERS, etc.)
- `categoriesMatchesAny`: Filters by category (CLOUD_PROVIDER, HR_PROVIDER, etc.)

Uses cursor-based pagination. To paginate:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage`
3. Use `results.pageInfo.endCursor` as `pageCursor` for next request

Results are sorted by integration display name (ascending). This sort order
is fixed and cannot be customized via query parameters.

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListIntegrations" method="get" path="/audits/{auditId}/integrations" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listIntegrations({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListIntegrations } from "vanta-auditor-api-sdk/funcs/auditsListIntegrations.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListIntegrations(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListIntegrations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIntegrationsRequest](../../models/operations/listintegrationsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseAuditIntegration](../../models/components/paginatedresponseauditintegration.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listAuditIssues

Retrieves a list of all issues that have been shared with an audit.

The issues returned are immutable, point-in-time snapshots; there may be duplicates of issues that have been snapshotted at different times.
The GET /audits/{auditId}/issues/snapshots endpoint can be used to retrieve metadata about the snapshots that issues belong to.
Issues represent compliance findings from a variety of sources that need to be tracked and remediated.

Supports filtering by:
- `search`: full text search across issue title and description
- `snapshotId`: filtering to a specific snapshot or snapshots, which represent point-in-time captures of issues. Use the GET /audits/{auditId}/issues/snapshots endpoint to retrieve snapshot IDs and metadata.
- `createdAfterDate` / `createdBeforeDate`: filter to issues created within a date range (inclusive)
- `detectedAfterDate` / `detectedBeforeDate`: filter to issues detected within a date range (inclusive)

Results are sorted by issue creation date in descending order (newest first) by default.
Use `orderBy` and `orderDirection` to customize sorting.
Sort parameters must remain consistent across paginated requests.

Uses cursor-based pagination. To paginate:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage`
3. Use `results.pageInfo.endCursor` as `pageCursor` for next request

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListAuditIssues" method="get" path="/audits/{auditId}/issues/items" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listAuditIssues({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListAuditIssues } from "vanta-auditor-api-sdk/funcs/auditsListAuditIssues.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListAuditIssues(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListAuditIssues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuditIssuesRequest](../../models/operations/listauditissuesrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedIssueSnapshotItemsResponse](../../models/components/paginatedissuesnapshotitemsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listAuditSnapshots

Retrieves a list of snapshots that have been shared with an audit.

The snapshots returned contain metadata about point-in-time captures of issues for an audit.
This data can be used to filter down the list of issues to specific snapshots when querying the GET /audits/{auditId}/issues/items endpoint.

Supports filtering by:
- `search`: full text search across snapshot title and description

Results are sorted by snapshot creation date in descending order (newest first).

Uses cursor-based pagination. To paginate:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage`
3. Use `results.pageInfo.endCursor` as `pageCursor` for next request

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListAuditSnapshots" method="get" path="/audits/{auditId}/issues/snapshots" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listAuditSnapshots({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListAuditSnapshots } from "vanta-auditor-api-sdk/funcs/auditsListAuditSnapshots.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListAuditSnapshots(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListAuditSnapshots failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuditSnapshotsRequest](../../models/operations/listauditsnapshotsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedIssueSnapshotMetadataResponse](../../models/components/paginatedissuesnapshotmetadataresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listVendors

Retrieves vendor population data for an audit.

This endpoint provides access to vendor records visible to auditors
during an audit engagement.

Supports filtering by:
- `search`: Searches vendor names (case-insensitive)
- `vendorStatusesMatchesAny`: Filters by vendor status (ACTIVE, ARCHIVED, IN_PROCUREMENT)
- `inherentRiskMatchesAny`: Filters by inherent risk level

Results are sorted by name (ascending) by default.
Use `orderBy` and `orderDirection` to customize sorting.
Sort parameters must remain consistent across paginated requests.

Uses cursor-based pagination. To paginate:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage`
3. Use `results.pageInfo.endCursor` as `pageCursor` for next request

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListVendors" method="get" path="/audits/{auditId}/managed-vendors" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listVendors({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListVendors } from "vanta-auditor-api-sdk/funcs/auditsListVendors.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListVendors(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListVendors failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListVendorsRequest](../../models/operations/listvendorsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseAuditVendor](../../models/components/paginatedresponseauditvendor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## ~~listMonitoredComputersInAuditScope~~

Returns a list of computers monitored by an MDM (with an integration built
by Vanta) or by Vanta Device Monitor. Currently this list does not include
resources from partner or customer-built integrations.

End of life — this endpoint works for classic audits only; it does not support
controlled audit view. It remains available for existing classic audits but will be removed once
classic audits are fully phased out, so do not build new integrations on it.

Returns 422 when the audit does not have exactly one program segment
(multi-framework audits are not supported on this endpoint).

Rate limit: 10 requests / minute.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListMonitoredComputersInAuditScope" method="get" path="/audits/{auditId}/monitored-computers" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listMonitoredComputersInAuditScope({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListMonitoredComputersInAuditScope } from "vanta-auditor-api-sdk/funcs/auditsListMonitoredComputersInAuditScope.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListMonitoredComputersInAuditScope(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListMonitoredComputersInAuditScope failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMonitoredComputersInAuditScopeRequest](../../models/operations/listmonitoredcomputersinauditscoperequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseMonitoredComputer](../../models/components/paginatedresponsemonitoredcomputer.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getOrganizationInformation

Retrieves organization information for an audit.

This endpoint returns a single record containing the organization's
business information visible to auditors during an audit engagement.

Sorting and pagination are not applicable.

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetOrganizationInformation" method="get" path="/audits/{auditId}/organization/information" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getOrganizationInformation({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetOrganizationInformation } from "vanta-auditor-api-sdk/funcs/auditsGetOrganizationInformation.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetOrganizationInformation(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetOrganizationInformation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrganizationInformationRequest](../../models/operations/getorganizationinformationrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AuditOrganizationInformation](../../models/components/auditorganizationinformation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getOrganizationNotifications

Retrieves organization notification settings for an audit.

This endpoint returns a single record containing the auditee
organization's notification configuration — schedule, personnel
reminder settings, and external notification subscriptions
(Compliance, Vendors, Access Reviews, Trust Center).

The response is a single aggregate object per domain. Sorting and
pagination are not applicable. Under a controlled audit view
(TRIMMED_DOWN), only CAV-approved fields are included.

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetOrganizationNotifications" method="get" path="/audits/{auditId}/organization/notifications" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getOrganizationNotifications({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetOrganizationNotifications } from "vanta-auditor-api-sdk/funcs/auditsGetOrganizationNotifications.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetOrganizationNotifications(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetOrganizationNotifications failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOrganizationNotificationsRequest](../../models/operations/getorganizationnotificationsrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AuditOrganizationNotifications](../../models/components/auditorganizationnotifications.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## ~~listPeopleInAuditScope~~

Returns a list of people who are in scope for this audit.

End of life — this endpoint works for classic audits only; it does not support
controlled audit view. It remains available for existing classic audits but will be removed once
classic audits are fully phased out, so do not build new integrations on it.

Rate limit: 10 requests / minute.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListPeopleInAuditScope" method="get" path="/audits/{auditId}/people" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listPeopleInAuditScope({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListPeopleInAuditScope } from "vanta-auditor-api-sdk/funcs/auditsListPeopleInAuditScope.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListPeopleInAuditScope(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListPeopleInAuditScope failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPeopleInAuditScopeRequest](../../models/operations/listpeopleinauditscoperequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponsePerson](../../models/components/paginatedresponseperson.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listAccountAccessServices

Retrieves connected account access services for an audit.

Returns the list of identity providers and access integrations (such as
Okta, Azure AD, Google Workspace, AWS IAM) that are connected to the
organization and provide account access data for personnel.

These integrations are used to verify user access and identity management
during an audit engagement.

Uses cursor-based pagination. To paginate:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage`
3. Use `results.pageInfo.endCursor` as `pageCursor` for next request

Results are returned in connection order. Sort order is not guaranteed
and cannot be customized via query parameters.

Returns 422 when the audit does not have exactly one program segment
(multi-framework audits are not supported on this endpoint).

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListAccountAccessServices" method="get" path="/audits/{auditId}/personnel/account-access/services" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listAccountAccessServices({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListAccountAccessServices } from "vanta-auditor-api-sdk/funcs/auditsListAccountAccessServices.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListAccountAccessServices(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListAccountAccessServices failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountAccessServicesRequest](../../models/operations/listaccountaccessservicesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseAccountAccessService](../../models/components/paginatedresponseaccountaccessservice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listPersonnelAccountAccess

Retrieves account access population data for an audit.

This endpoint provides access to account access records visible to auditors
during an audit engagement. Account access data comes from various sources:

- **IDP Services** (Identity Providers): Okta, Azure AD, Google Workspace, OneLogin, PingOne

  - Returns user accounts from identity providers
  - Supports filtering by search and status

- **Role Grants Services**: GCP, Azure (when role grants are enabled)

  - Returns accounts with role-based access grants
  - Supports filtering by search and status

- **First-Party Account Services**: AWS, Oracle Cloud, Azure (when not using role grants), etc.

  - Returns cloud provider account access records
  - Supports filtering by search and status

- **Received Account Services**: External applications (Jira, GitHub, Slack, etc.)

  - Returns user accounts from third-party integrations
  - Supports filtering by search and status


Supports filtering by:
- `search`: Searches account names/emails (case-insensitive)
- `status`: Filters by account status

Uses cursor-based pagination. To paginate:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage`
3. Use `results.pageInfo.endCursor` as `pageCursor` for next request

The default sort order depends on the service type:
- Identity provider services (e.g. Okta, Azure AD): sorted by email, ascending
- Cloud provider services (e.g. AWS, GCP): sorted by account name, ascending
- Role grant services: sorted by account name, ascending
- Third-party application services (e.g. GitHub, Jira): sorted by account name, ascending

Sort order cannot be customized via query parameters.

Returns 422 when the audit does not have exactly one program segment
(multi-framework audits are not supported on this endpoint).

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListPersonnelAccountAccess" method="get" path="/audits/{auditId}/personnel/account-access/{serviceId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listPersonnelAccountAccess({
    auditId: "<id>",
    serviceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListPersonnelAccountAccess } from "vanta-auditor-api-sdk/funcs/auditsListPersonnelAccountAccess.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListPersonnelAccountAccess(vanta, {
    auditId: "<id>",
    serviceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListPersonnelAccountAccess failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPersonnelAccountAccessRequest](../../models/operations/listpersonnelaccountaccessrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseAccountAccess](../../models/components/paginatedresponseaccountaccess.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listPersonnelGroups

Retrieves groups population data for an audit.

This endpoint provides access to the group records visible to auditors
during an audit engagement. Groups represent organizational units that
contain people, either imported from an identity provider (IDP) or
created manually in Vanta.

Only Controlled Audit View (CAV) audits are supported. Full Audit
View audits are rejected with 403.

Supports filtering by:
- `search`: Searches group names (case-insensitive)
- `sourcesMatchesAny`: Filters by IDP source service names

Results are sorted by name (ascending) by default.
Use `orderBy` and `orderDirection` to customize sorting.
Sort parameters must remain consistent across paginated requests.

Uses cursor-based pagination. To paginate:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage`
3. Use `results.pageInfo.endCursor` as `pageCursor` for next request

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListPersonnelGroups" method="get" path="/audits/{auditId}/personnel/groups" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listPersonnelGroups({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListPersonnelGroups } from "vanta-auditor-api-sdk/funcs/auditsListPersonnelGroups.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListPersonnelGroups(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListPersonnelGroups failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPersonnelGroupsRequest](../../models/operations/listpersonnelgroupsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponsePersonnelGroup](../../models/components/paginatedresponsepersonnelgroup.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listPersonnelPeople

Retrieves people population data for an audit.

This endpoint provides access to the people records visible to auditors
during an audit engagement. Only Controlled Audit View (CAV) audits
are supported. Full Audit View audits are rejected with 403.

Supports filtering by:
- `search`: Searches names and email addresses
- `status`: Filters by employment status
- `groupsMatchesAny`: Filter people by group/role IDs

Results are sorted by name (ascending) by default.
Use `orderBy` and `orderDirection` to customize sorting.
Sort parameters must remain consistent across paginated requests.

Uses cursor-based pagination. To paginate:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage`
3. Use `results.pageInfo.endCursor` as `pageCursor` for next request

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListPersonnelPeople" method="get" path="/audits/{auditId}/personnel/people" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listPersonnelPeople({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListPersonnelPeople } from "vanta-auditor-api-sdk/funcs/auditsListPersonnelPeople.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListPersonnelPeople(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListPersonnelPeople failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPersonnelPeopleRequest](../../models/operations/listpersonnelpeoplerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponsePersonnelPerson](../../models/components/paginatedresponsepersonnelperson.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listRiskSnapshots

Returns a paginated list of risk assessment snapshots available for an audit.

Risk snapshots capture the state of an organization's risk register at a
point in time. Each snapshot has an `id` that can be used with the
`/audits/{auditId}/risks` endpoint to retrieve the individual risk
scenarios within that snapshot.

Results are sorted by creation date (newest first). This sort order is
fixed and cannot be customized via query parameters. Only snapshots
that are shared with auditors are included.

Uses cursor-based pagination. To paginate:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage`
3. Use `results.pageInfo.endCursor` as `pageCursor` for next request

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListRiskSnapshots" method="get" path="/audits/{auditId}/risks/snapshots" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listRiskSnapshots({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListRiskSnapshots } from "vanta-auditor-api-sdk/funcs/auditsListRiskSnapshots.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListRiskSnapshots(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListRiskSnapshots failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRiskSnapshotsRequest](../../models/operations/listrisksnapshotsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseRiskSnapshot](../../models/components/paginatedresponserisksnapshot.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## listAuditRisks

Retrieves risk population data for an audit.

This endpoint provides access to the risk records visible to auditors
during an audit engagement. Risk data is scoped to a specific risk
assessment snapshot identified by the `snapshotId` parameter.

Only Controlled Audit View (CAV) audits are supported. Full Audit
View audits are rejected with 403.

Supports filtering by:
- `search`: Searches risk scenario descriptions (case-insensitive)

Results are sorted by identified date (newest first) by default.
Use `orderBy` and `orderDirection` to customize sorting.
Sort parameters must remain consistent across paginated requests.

Uses cursor-based pagination. To paginate:
1. Make initial request with desired `pageSize`
2. Check `results.pageInfo.hasNextPage`
3. Use `results.pageInfo.endCursor` as `pageCursor` for next request

Rate limit: 10 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListAuditRisks" method="get" path="/audits/{auditId}/risks/{snapshotId}" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listAuditRisks({
    auditId: "<id>",
    snapshotId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListAuditRisks } from "vanta-auditor-api-sdk/funcs/auditsListAuditRisks.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListAuditRisks(vanta, {
    auditId: "<id>",
    snapshotId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListAuditRisks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAuditRisksRequest](../../models/operations/listauditrisksrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseAuditRisk](../../models/components/paginatedresponseauditrisk.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## shareInformationRequestList

Shares the current information request list for an audit with the customer organization,
making it visible in their portal. This action allows the customer to see all information
requests that have been created for their audit. Only IRL audits are supported.

Rate limit: 50 requests / minute.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ShareInformationRequestList" method="post" path="/audits/{auditId}/share-information-request-list" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.shareInformationRequestList({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsShareInformationRequestList } from "vanta-auditor-api-sdk/funcs/auditsShareInformationRequestList.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsShareInformationRequestList(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsShareInformationRequestList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ShareInformationRequestListRequest](../../models/operations/shareinformationrequestlistrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Audit](../../models/components/audit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## ~~listVendorsInAuditScope~~

Returns a list of vendors who are in scope for this audit.

End of life — this endpoint works for classic audits only; it does not support
controlled audit view. It remains available for existing classic audits but will be removed once
classic audits are fully phased out, so do not build new integrations on it.

Rate limit: 10 requests / minute.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListVendorsInAuditScope" method="get" path="/audits/{auditId}/vendors" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listVendorsInAuditScope({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListVendorsInAuditScope } from "vanta-auditor-api-sdk/funcs/auditsListVendorsInAuditScope.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListVendorsInAuditScope(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListVendorsInAuditScope failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListVendorsInAuditScopeRequest](../../models/operations/listvendorsinauditscoperequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseVendor](../../models/components/paginatedresponsevendor.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## ~~listVulnerabilities~~

List all vulnerabilities based on selected filters.

End of life — this endpoint works for classic audits only; it does not support
controlled audit view. It remains available for existing classic audits but will be removed once
classic audits are fully phased out, so do not build new integrations on it.

Rate limit: 10 requests / minute.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListVulnerabilities" method="get" path="/audits/{auditId}/vulnerabilities" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listVulnerabilities({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListVulnerabilities } from "vanta-auditor-api-sdk/funcs/auditsListVulnerabilities.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListVulnerabilities(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListVulnerabilities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListVulnerabilitiesRequest](../../models/operations/listvulnerabilitiesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseAuditorApiVulnerability](../../models/components/paginatedresponseauditorapivulnerability.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## ~~listVulnerabilityRemediationsInAuditScope~~

List all vulnerability remediations based on selected filters that are in scope for this audit.

End of life — this endpoint works for classic audits only; it does not support
controlled audit view. It remains available for existing classic audits but will be removed once
classic audits are fully phased out, so do not build new integrations on it.

Returns 422 when the audit does not have exactly one program segment
(multi-framework audits are not supported on this endpoint).

Rate limit: 10 requests / minute.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ListVulnerabilityRemediationsInAuditScope" method="get" path="/audits/{auditId}/vulnerability-remediations" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.listVulnerabilityRemediationsInAuditScope({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsListVulnerabilityRemediationsInAuditScope } from "vanta-auditor-api-sdk/funcs/auditsListVulnerabilityRemediationsInAuditScope.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsListVulnerabilityRemediationsInAuditScope(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsListVulnerabilityRemediationsInAuditScope failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListVulnerabilityRemediationsInAuditScopeRequest](../../models/operations/listvulnerabilityremediationsinauditscoperequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseVulnerabilityRemediation](../../models/components/paginatedresponsevulnerabilityremediation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## ~~getVulnerableAssets~~

List assets that Vanta monitors that are associated with vulnerabilities.

End of life — this endpoint works for classic audits only; it does not support
controlled audit view. It remains available for existing classic audits but will be removed once
classic audits are fully phased out, so do not build new integrations on it.

Rate limit: 10 requests / minute.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="GetVulnerableAssets" method="get" path="/audits/{auditId}/vulnerable-assets" example="Example 1" -->
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.getVulnerableAssets({
    auditId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { VantaCore } from "vanta-auditor-api-sdk/core.js";
import { auditsGetVulnerableAssets } from "vanta-auditor-api-sdk/funcs/auditsGetVulnerableAssets.js";

// Use `VantaCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const vanta = new VantaCore({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await auditsGetVulnerableAssets(vanta, {
    auditId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditsGetVulnerableAssets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetVulnerableAssetsRequest](../../models/operations/getvulnerableassetsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PaginatedResponseVulnerableAsset](../../models/components/paginatedresponsevulnerableasset.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |