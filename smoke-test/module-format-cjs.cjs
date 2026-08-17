const { Vanta } = require("vanta-auditor-api-sdk");
const components = require("vanta-auditor-api-sdk/models/components");
const errors = require("vanta-auditor-api-sdk/models/errors");
const operations = require("vanta-auditor-api-sdk/models/operations");
const { HTTPClient } = require("vanta-auditor-api-sdk/lib/http");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(typeof Vanta === "function", "CJS: Vanta export missing");
assert(typeof HTTPClient === "function", "CJS: HTTPClient export missing");
assert(Object.keys(components).length > 0, "CJS: models/components empty");
assert(Object.keys(errors).length > 0, "CJS: models/errors empty");
assert(Object.keys(operations).length > 0, "CJS: models/operations empty");

console.log("module-format CJS OK");
