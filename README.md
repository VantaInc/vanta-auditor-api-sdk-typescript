# vanta-auditor-api-sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *vanta-auditor-api-sdk* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=vanta-auditor-api-sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/vanta/vanta). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Conduct an audit: The Auditor API lets audit firms conduct audits from a tool outside of Vanta. Unlock data syncing with Vanta through this API.
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

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
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

  // Handle the result
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [auditors](docs/sdks/auditors/README.md)

* [create](docs/sdks/auditors/README.md#create) - Create an auditor

### [audits](docs/sdks/audits/README.md)

* [list](docs/sdks/audits/README.md#list) - List audits
* [getEvidenceUrls](docs/sdks/audits/README.md#getevidenceurls) - List audit evidence url
* [listEvidence](docs/sdks/audits/README.md#listevidence) - List audit evidence
* [listComments](docs/sdks/audits/README.md#listcomments) - List audit comments
* [listControls](docs/sdks/audits/README.md#listcontrols) - List audit controls
* [createCommentForEvidence](docs/sdks/audits/README.md#createcommentforevidence) - Create a comment for audit evidence
* [updateEvidence](docs/sdks/audits/README.md#updateevidence) - Update audit evidence
* [createCustomEvidenceRequest](docs/sdks/audits/README.md#createcustomevidencerequest) - Create a custom evidence request for an audit
* [createCustomControl](docs/sdks/audits/README.md#createcustomcontrol) - Create a custom control for an audit


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
- [`auditsCreateCommentForEvidence`](docs/sdks/audits/README.md#createcommentforevidence) - Create a comment for audit evidence
- [`auditsCreateCustomControl`](docs/sdks/audits/README.md#createcustomcontrol) - Create a custom control for an audit
- [`auditsCreateCustomEvidenceRequest`](docs/sdks/audits/README.md#createcustomevidencerequest) - Create a custom evidence request for an audit
- [`auditsGetEvidenceUrls`](docs/sdks/audits/README.md#getevidenceurls) - List audit evidence url
- [`auditsList`](docs/sdks/audits/README.md#list) - List audits
- [`auditsListComments`](docs/sdks/audits/README.md#listcomments) - List audit comments
- [`auditsListControls`](docs/sdks/audits/README.md#listcontrols) - List audit controls
- [`auditsListEvidence`](docs/sdks/audits/README.md#listevidence) - List audit evidence
- [`auditsUpdateEvidence`](docs/sdks/audits/README.md#updateevidence) - Update audit evidence

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

  // Handle the result
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

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

If the request fails due to, for example 4XX or 5XX status codes, it will throw a `APIError`.

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.APIError | 4XX, 5XX    | \*/\*        |

```typescript
import { Vanta } from "vanta-auditor-api-sdk";
import { SDKValidationError } from "vanta-auditor-api-sdk/models/errors";

const vanta = new Vanta({
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  let result;
  try {
    result = await vanta.audits.list({});

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError):
        {
          // Pretty-print will provide a human-readable multi-line error message
          console.error(err.pretty());
          // Raw value may also be inspected
          console.error(err.rawValue);
          return;
        }
        apierror.js;
      // Server returned an error status code or an unknown content type
      case (err instanceof APIError): {
        console.error(err.statusCode);
        console.error(err.rawResponse.body);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Vanta } from "vanta-auditor-api-sdk";

const vanta = new Vanta({
  serverURL: "https://api.vanta.com/v1",
  bearerAuth: process.env["VANTA_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await vanta.audits.list({});

  // Handle the result
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

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Vanta } from "vanta-auditor-api-sdk";
import { HTTPClient } from "vanta-auditor-api-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
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

const sdk = new Vanta({ httpClient });
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
