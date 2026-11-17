import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join, resolve } from "node:path";
import { test } from "node:test";
import { load } from "js-yaml";
import { validateSpec } from "./validate-spec.mjs";

test("the fetched input survives Speakeasy replacing its SDK clone", async t => {
  const workspace = await mkdtemp(join(tmpdir(), "sdk-generation-"));
  t.after(() => rm(workspace, { recursive: true, force: true }));
  const generation = load(await readFile(new URL("../workflows/sdk_generation.yaml", import.meta.url), "utf8"));
  const runner = load(await readFile(new URL("../workflows/speakeasy_generate.yaml", import.meta.url), "utf8"));
  const workflow = load(await readFile(new URL("../../.speakeasy/workflow.yaml", import.meta.url), "utf8"));
  const upload = generation.jobs.spec.steps.find(step => step.uses?.startsWith("actions/upload-artifact@"));
  const download = runner.jobs.generate.steps.find(step => step.uses?.startsWith("actions/download-artifact@"));
  const artifactDirectory = resolve(workspace, download.with.path);
  await mkdir(artifactDirectory, { recursive: true });
  await writeFile(join(artifactDirectory, basename(upload.with.path)), `openapi: 3.0.0
info: {title: Fetched auditor spec, version: '1.0'}
paths: {/audits: {get: {responses: {'200': {description: OK}}}}}
`);

  const clone = join(workspace, "repo");
  await mkdir(clone);
  await rm(clone, { recursive: true });
  await mkdir(clone);
  const input = workflow.sources["Conduct an audit"].inputs[0].location;
  const spec = validateSpec(await readFile(resolve(clone, input), "utf8"));
  assert.equal(spec.info.title, "Fetched auditor spec");
});
