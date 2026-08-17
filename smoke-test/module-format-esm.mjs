import { Vanta } from "vanta-auditor-api-sdk";
import * as components from "vanta-auditor-api-sdk/models/components";
import * as errors from "vanta-auditor-api-sdk/models/errors";
import * as operations from "vanta-auditor-api-sdk/models/operations";
import { HTTPClient } from "vanta-auditor-api-sdk/lib/http";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(typeof Vanta === "function", "ESM: Vanta export missing");
assert(typeof HTTPClient === "function", "ESM: HTTPClient export missing");
assert(Object.keys(components).length > 0, "ESM: models/components empty");
assert(Object.keys(errors).length > 0, "ESM: models/errors empty");
assert(Object.keys(operations).length > 0, "ESM: models/operations empty");

console.log("module-format ESM OK");
