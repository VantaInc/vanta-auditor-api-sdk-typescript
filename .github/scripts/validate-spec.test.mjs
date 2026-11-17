import assert from "node:assert/strict";
import { mkdtemp, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { test } from "node:test";
import { validateSpec } from "./validate-spec.mjs";

const spec = `openapi: 3.0.0
info: {title: Auditor API, version: '1.0'}
paths:
  /audits:
    get:
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema: {$ref: '#/components/schemas/Audit'}
components:
  schemas:
    Audit: {type: object}
`;

test("accepts internal references and discriminator schema names", () => {
  assert.equal(validateSpec(spec).openapi, "3.0.0");
  validateSpec(spec + '\nx: {discriminator: {propertyName: type, mapping: {a: Audit, b: "#/components/schemas/Audit"}}}\n');
});

for (const reference of ["https://example.invalid/schema", "../schema.yaml", "/etc/passwd", "file:///tmp/schema"]) {
  test(`rejects external reference ${reference}`, () => {
    assert.throws(() => validateSpec(spec.replace("#/components/schemas/Audit", reference)), /inside this document/);
  });
}

test("parses quoted keys and multiline reference values before checking them", () => {
  const quoted = spec.replace("{$ref: '#/components/schemas/Audit'}", '\n                "$ref": >-\n                  https://example.invalid/schema');
  assert.throws(() => validateSpec(quoted), /inside this document/);
});

for (const suffix of [
  'x: {operationRef: "https://example.invalid/operation"}',
  'x: {externalValue: "https://example.invalid/example"}',
  'x: {$dynamicRef: "#/components/schemas/Audit"}',
  'x: {$recursiveRef: "#/components/schemas/Audit"}',
  'x: {discriminator: {mapping: {a: "https://example.invalid/schema"}}}',
  'x: {discriminator: {mapping: {a: other.yaml}}}',
  'x: &shared {type: string}\ny: *shared',
  'x: &cycle {self: *cycle}',
  'openapi: 3.0.1',
  '---\nopenapi: 3.0.0',
  'x: !execute bad',
]) {
  test(`rejects unsupported YAML or remote input: ${suffix}`, () => {
    assert.throws(() => validateSpec(`${spec}\n${suffix}\n`));
  });
}

for (const invalid of ["", "<html>not a spec</html>", "openapi: [", spec.replace("3.0.0", "3.1.0")]) {
  test(`rejects invalid spec: ${invalid.slice(0, 30)}`, () => assert.throws(() => validateSpec(invalid)));
}

test("the CLI rejects symlinks and does not log invalid file contents", async t => {
  const directory = await mkdtemp(join(tmpdir(), "sdk-spec-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const file = join(directory, "spec.yaml");
  const link = join(directory, "link.yaml");
  const cli = fileURLToPath(new URL("./validate-spec.mjs", import.meta.url));
  await writeFile(file, "private-invalid-content: [");
  let result = spawnSync(process.execPath, [cli, file], { encoding: "utf8" });
  assert.equal(result.status, 1);
  assert.ok(!result.stderr.includes("private-invalid-content"));
  await writeFile(file, spec);
  assert.equal(spawnSync(process.execPath, [cli, file]).status, 0);
  await symlink(file, link);
  result = spawnSync(process.execPath, [cli, link], { encoding: "utf8" });
  assert.equal(result.status, 1);
});
