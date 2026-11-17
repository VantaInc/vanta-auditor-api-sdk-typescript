import { lstatSync, readFileSync } from "node:fs";
import process from "node:process";
import { pathToFileURL } from "node:url";
import { TextDecoder } from "node:util";
import { CORE_SCHEMA, load } from "js-yaml";

export function validateSpec(text) {
  const spec = load(text, { schema: CORE_SCHEMA });
  if (!spec || !/^3\.0\.\d+$/.test(spec.openapi) ||
      typeof spec.info?.title !== "string" || typeof spec.info?.version !== "string" ||
      !spec.paths || typeof spec.paths !== "object" || Array.isArray(spec.paths) ||
      Object.keys(spec.paths).length === 0) {
    throw new Error("Expected a nonempty OpenAPI 3.0 document.");
  }
  const pending = [spec];
  const seen = new Set();
  while (pending.length) {
    const value = pending.pop();
    if (value === null || typeof value !== "object") continue;
    if (seen.has(value)) throw new Error("YAML object aliases are not supported.");
    seen.add(value);
    for (const [key, child] of Object.entries(value)) {
      if (["$ref", "operationRef"].includes(key) &&
          (typeof child !== "string" || !child.startsWith("#/"))) {
        throw new Error("References must point inside this document.");
      }
      if (["$dynamicRef", "$recursiveRef", "externalValue"].includes(key)) {
        throw new Error("Dynamic references and external example values are not supported.");
      }
      if (key === "discriminator" && child?.mapping) {
        for (const target of Object.values(child.mapping)) {
          if (typeof target !== "string" ||
              (!target.startsWith("#/") && !Object.hasOwn(spec.components?.schemas ?? {}, target))) {
            throw new Error("Discriminator mappings must refer to local schemas.");
          }
        }
      }
      pending.push(child);
    }
  }
  return spec;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const file = process.argv[2];
    const stat = lstatSync(file);
    if (!stat.isFile() || stat.size > 5 * 1024 * 1024) throw new Error();
    validateSpec(new TextDecoder("utf-8", { fatal: true }).decode(readFileSync(file)));
    console.log("Validated self-contained auditor API spec.");
  } catch {
    console.error("Spec validation failed: expected a regular UTF-8 OpenAPI 3.0 YAML file, at most 5 MiB, with only local references.");
    process.exitCode = 1;
  }
}
