# vanta-auditor-api-sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *vanta-auditor-api-sdk* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=vanta-auditor-api-sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

Conduct an audit: The Auditor API lets audit firms conduct audits from a tool outside of Vanta. Unlock data syncing with Vanta through this API.

**Note for Vanta Gov (FedRAMP) customers:** Select `Vanta Gov (FedRAMP)` from the server dropdown to issue requests against `https://api.vanta-gov.com`. The OAuth token URL shown below defaults to the commercial host — replace it with `https://api.vanta-gov.com/oauth/token`.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [vanta-auditor-api-sdk](#vanta-auditor-api-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)
* [vanta-auditor-api-sdk-typescript](#vanta-auditor-api-sdk-typescript)
* [vanta-auditor-api-sdk-typescript](#vanta-auditor-api-sdk-typescript-1)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add vanta-auditor-api-sdk
```

### PNPM

```bash
pnpm add vanta-auditor-api-sdk
```

### Bun

```bash
bun add vanta-auditor-api-sdk
```

### Yarn

```bash
yarn add vanta-auditor-api-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable |
| ------------ | ---- | ----------- | -------------------- |
| `bearerAuth` | http | HTTP Bearer | `VANTA_BEARER_AUTH`  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Auditors](docs/sdks/auditors/README.md)

* [create](docs/sdks/auditors/README.md#create) - Create an auditor

### [Audits](docs/sdks/audits/README.md)

* [list](docs/sdks/audits/README.md#list) - List audits
* [getAudit](docs/sdks/audits/README.md#getaudit) - Get audit by ID
* [listCodeChanges](docs/sdks/audits/README.md#listcodechanges) - List code changes for an audit
* [listComments](docs/sdks/audits/README.md#listcomments) - List audit comments
* [listControls](docs/sdks/audits/README.md#listcontrols) - List audit controls
* [createCustomControl](docs/sdks/audits/README.md#createcustomcontrol) - Create a custom control for an audit
* [listInformationRequestsForControl](docs/sdks/audits/README.md#listinformationrequestsforcontrol) - List information requests linked to a control within an audit
* [listEvidence](docs/sdks/audits/README.md#listevidence) - List audit evidence
* [createCustomEvidenceRequest](docs/sdks/audits/README.md#createcustomevidencerequest) - Create a custom evidence request for an audit
* [updateEvidence](docs/sdks/audits/README.md#updateevidence) - Update audit evidence
* [createCommentForEvidence](docs/sdks/audits/README.md#createcommentforevidence) - Create a comment for audit evidence
* [getEvidenceUrls](docs/sdks/audits/README.md#getevidenceurls) - List audit evidence url
* [getFrameworkCodes](docs/sdks/audits/README.md#getframeworkcodes) - Get framework codes for an audit
* [listInformationRequests](docs/sdks/audits/README.md#listinformationrequests) - List information requests for an audit
* [createInformationRequest](docs/sdks/audits/README.md#createinformationrequest) - Create a new information request
* [getInformationRequest](docs/sdks/audits/README.md#getinformationrequest) - Get an information request by ID
* [updateInformationRequest](docs/sdks/audits/README.md#updateinformationrequest) - Update an information request for an audit
* [deleteInformationRequest](docs/sdks/audits/README.md#deleteinformationrequest) - Delete an information request for an audit
* [acceptInformationRequestEvidence](docs/sdks/audits/README.md#acceptinformationrequestevidence) - Accept evidence for an information request
* [listInformationRequestActivity](docs/sdks/audits/README.md#listinformationrequestactivity) - List information request activity
* [listCommentsForInformationRequest](docs/sdks/audits/README.md#listcommentsforinformationrequest) - List comments for an information request
* [createCommentForInformationRequest](docs/sdks/audits/README.md#createcommentforinformationrequest) - Create a comment for an information request
* [updateCommentForInformationRequest](docs/sdks/audits/README.md#updatecommentforinformationrequest) - Update a comment for an information request
* [deleteCommentForInformationRequest](docs/sdks/audits/README.md#deletecommentforinformationrequest) - Delete a comment for an information request
* [listInformationRequestEvidence](docs/sdks/audits/README.md#listinformationrequestevidence) - List evidence for an information request
* [getInformationRequestTestSnapshotEvidenceDetail](docs/sdks/audits/README.md#getinformationrequesttestsnapshotevidencedetail) - Get test snapshot detail for an evidence row
* [flagInformationRequestEvidence](docs/sdks/audits/README.md#flaginformationrequestevidence) - Flag evidence for an information request
* [listAuditIssues](docs/sdks/audits/README.md#listauditissues) - List snapshotted issues for an audit
* [listAuditSnapshots](docs/sdks/audits/README.md#listauditsnapshots) - List snapshotted issues for an audit
* [listVendors](docs/sdks/audits/README.md#listvendors) - List vendors for an audit
* [~~listMonitoredComputersInAuditScope~~](docs/sdks/audits/README.md#listmonitoredcomputersinauditscope) - List monitored computers :warning: **Deprecated**
* [~~listPeopleInAuditScope~~](docs/sdks/audits/README.md#listpeopleinauditscope) - List of people who are in scope for this audit :warning: **Deprecated**
* [listAccountAccessServices](docs/sdks/audits/README.md#listaccountaccessservices) - List account access services for an audit
* [listPersonnelAccountAccess](docs/sdks/audits/README.md#listpersonnelaccountaccess) - List account access records for an audit
* [listPersonnelGroups](docs/sdks/audits/README.md#listpersonnelgroups) - List groups for an audit
* [listPersonnelPeople](docs/sdks/audits/README.md#listpersonnelpeople) - List people for an audit
* [listRiskSnapshots](docs/sdks/audits/README.md#listrisksnapshots) - List risk snapshots for an audit
* [listAuditRisks](docs/sdks/audits/README.md#listauditrisks) - List risks for an audit
* [shareInformationRequestList](docs/sdks/audits/README.md#shareinformationrequestlist) - Share information request list with customer
* [~~listVendorsInAuditScope~~](docs/sdks/audits/README.md#listvendorsinauditscope) - List of vendors who are in scope for this audit :warning: **Deprecated**
* [~~listVulnerabilities~~](docs/sdks/audits/README.md#listvulnerabilities) - List vulnerabilities within the scope of a given audit :warning: **Deprecated**
* [~~listVulnerabilityRemediationsInAuditScope~~](docs/sdks/audits/README.md#listvulnerabilityremediationsinauditscope) - List vulnerability remediations that are in scope for this audit :warning: **Deprecated**
* [~~getVulnerableAssets~~](docs/sdks/audits/README.md#getvulnerableassets) - List assets associated with vulnerabilities :warning: **Deprecated**

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`auditorsCreate`](docs/sdks/auditors/README.md#create) - Create an auditor
- [`auditsAcceptInformationRequestEvidence`](docs/sdks/audits/README.md#acceptinformationrequestevidence) - Accept evidence for an information request
- [`auditsCreateCommentForEvidence`](docs/sdks/audits/README.md#createcommentforevidence) - Create a comment for audit evidence
- [`auditsCreateCommentForInformationRequest`](docs/sdks/audits/README.md#createcommentforinformationrequest) - Create a comment for an information request
- [`auditsCreateCustomControl`](docs/sdks/audits/README.md#createcustomcontrol) - Create a custom control for an audit
- [`auditsCreateCustomEvidenceRequest`](docs/sdks/audits/README.md#createcustomevidencerequest) - Create a custom evidence request for an audit
- [`auditsCreateInformationRequest`](docs/sdks/audits/README.md#createinformationrequest) - Create a new information request
- [`auditsDeleteCommentForInformationRequest`](docs/sdks/audits/README.md#deletecommentforinformationrequest) - Delete a comment for an information request
- [`auditsDeleteInformationRequest`](docs/sdks/audits/README.md#deleteinformationrequest) - Delete an information request for an audit
- [`auditsFlagInformationRequestEvidence`](docs/sdks/audits/README.md#flaginformationrequestevidence) - Flag evidence for an information request
- [`auditsGetAudit`](docs/sdks/audits/README.md#getaudit) - Get audit by ID
- [`auditsGetEvidenceUrls`](docs/sdks/audits/README.md#getevidenceurls) - List audit evidence url
- [`auditsGetFrameworkCodes`](docs/sdks/audits/README.md#getframeworkcodes) - Get framework codes for an audit
- [`auditsGetInformationRequest`](docs/sdks/audits/README.md#getinformationrequest) - Get an information request by ID
- [`auditsGetInformationRequestTestSnapshotEvidenceDetail`](docs/sdks/audits/README.md#getinformationrequesttestsnapshotevidencedetail) - Get test snapshot detail for an evidence row
- [`auditsList`](docs/sdks/audits/README.md#list) - List audits
- [`auditsListAccountAccessServices`](docs/sdks/audits/README.md#listaccountaccessservices) - List account access services for an audit
- [`auditsListAuditIssues`](docs/sdks/audits/README.md#listauditissues) - List snapshotted issues for an audit
- [`auditsListAuditRisks`](docs/sdks/audits/README.md#listauditrisks) - List risks for an audit
- [`auditsListAuditSnapshots`](docs/sdks/audits/README.md#listauditsnapshots) - List snapshotted issues for an audit
- [`auditsListCodeChanges`](docs/sdks/audits/README.md#listcodechanges) - List code changes for an audit
- [`auditsListComments`](docs/sdks/audits/README.md#listcomments) - List audit comments
- [`auditsListCommentsForInformationRequest`](docs/sdks/audits/README.md#listcommentsforinformationrequest) - List comments for an information request
- [`auditsListControls`](docs/sdks/audits/README.md#listcontrols) - List audit controls
- [`auditsListEvidence`](docs/sdks/audits/README.md#listevidence) - List audit evidence
- [`auditsListInformationRequestActivity`](docs/sdks/audits/README.md#listinformationrequestactivity) - List information request activity
- [`auditsListInformationRequestEvidence`](docs/sdks/audits/README.md#listinformationrequestevidence) - List evidence for an information request
- [`auditsListInformationRequests`](docs/sdks/audits/README.md#listinformationrequests) - List information requests for an audit
- [`auditsListInformationRequestsForControl`](docs/sdks/audits/README.md#listinformationrequestsforcontrol) - List information requests linked to a control within an audit
- [`auditsListPersonnelAccountAccess`](docs/sdks/audits/README.md#listpersonnelaccountaccess) - List account access records for an audit
- [`auditsListPersonnelGroups`](docs/sdks/audits/README.md#listpersonnelgroups) - List groups for an audit
- [`auditsListPersonnelPeople`](docs/sdks/audits/README.md#listpersonnelpeople) - List people for an audit
- [`auditsListRiskSnapshots`](docs/sdks/audits/README.md#listrisksnapshots) - List risk snapshots for an audit
- [`auditsListVendors`](docs/sdks/audits/README.md#listvendors) - List vendors for an audit
- [`auditsShareInformationRequestList`](docs/sdks/audits/README.md#shareinformationrequestlist) - Share information request list with customer
- [`auditsUpdateCommentForInformationRequest`](docs/sdks/audits/README.md#updatecommentforinformationrequest) - Update a comment for an information request
- [`auditsUpdateEvidence`](docs/sdks/audits/README.md#updateevidence) - Update audit evidence
- [`auditsUpdateInformationRequest`](docs/sdks/audits/README.md#updateinformationrequest) - Update an information request for an audit
- ~~[`auditsGetVulnerableAssets`](docs/sdks/audits/README.md#getvulnerableassets)~~ - List assets associated with vulnerabilities :warning: **Deprecated**
- ~~[`auditsListMonitoredComputersInAuditScope`](docs/sdks/audits/README.md#listmonitoredcomputersinauditscope)~~ - List monitored computers :warning: **Deprecated**
- ~~[`auditsListPeopleInAuditScope`](docs/sdks/audits/README.md#listpeopleinauditscope)~~ - List of people who are in scope for this audit :warning: **Deprecated**
- ~~[`auditsListVendorsInAuditScope`](docs/sdks/audits/README.md#listvendorsinauditscope)~~ - List of vendors who are in scope for this audit :warning: **Deprecated**
- ~~[`auditsListVulnerabilities`](docs/sdks/audits/README.md#listvulnerabilities)~~ - List vulnerabilities within the scope of a given audit :warning: **Deprecated**
- ~~[`auditsListVulnerabilityRemediationsInAuditScope`](docs/sdks/audits/README.md#listvulnerabilityremediationsinauditscope)~~ - List vulnerability remediations that are in scope for this audit :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.list({}, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.list({});

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`VantaError`](./src/models/errors/vantaerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                            |
| ------------------- | ---------- | ------------------------------------------------------ |
| `error.message`     | `string`   | Error message                                          |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
| `error.headers`     | `Headers`  | HTTP response headers                                  |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
| `error.rawResponse` | `Response` | Raw HTTP response                                      |

### Example
```typescript
import { Vanta } from "vanta-auditor-api-sdk";
import * as errors from "vanta-auditor-api-sdk/models/errors";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  try {
    const result = await vanta.auditors.create({
      email: "Genesis_Kunze87@yahoo.com",
      givenName: "<value>",
      familyName: "<value>",
    });

    console.log(result);
  } catch (error) {
    if (error instanceof errors.VantaError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`VantaError`](./src/models/errors/vantaerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`VantaError`](./src/models/errors/vantaerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                         | Description         |
| --- | ------------------------------ | ------------------- |
| 0   | `https://api.vanta.com/v1`     | US Region API       |
| 1   | `https://api.vanta-gov.com/v1` | Vanta Gov (FedRAMP) |

#### Example

```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  serverIdx: 0,
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.list({});

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  serverURL: "https://api.vanta-gov.com/v1",
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.list({});

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Vanta } from "vanta-auditor-api-sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "vanta-auditor-api-sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Vanta({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const sdk = new Vanta({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `VANTA_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=vanta-auditor-api-sdk&utm_campaign=typescript)
# vanta-auditor-api-sdk-typescript
# vanta-auditor-api-sdk-typescript
