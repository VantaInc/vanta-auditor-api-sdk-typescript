import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { parse } from 'yaml';
import {
  digest, fetchSnapshot, provenance, readSnapshot, repository,
  sourcePath, stageSnapshot, validateSpec, writeSnapshot,
} from './spec.mjs';

const commit = 'a'.repeat(40);
const yaml = Buffer.from(`openapi: 3.0.0
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
`);

test('accepts the self-contained YAML and records exact bytes and source', () => {
  assert.equal(validateSpec(yaml).openapi, '3.0.0');
  assert.deepEqual(provenance(yaml, commit), {
    repository, path: sourcePath, commit, sha256: digest(yaml),
  });
});

for (const reference of ['https://attacker.invalid/schema', '../other.yaml#/Audit', '/etc/passwd', 'file:///tmp/schema']) {
  test(`rejects external reference ${reference}`, () => {
    assert.throws(() => validateSpec(Buffer.from(yaml.toString().replace('#/components/schemas/Audit', reference))), /references must point inside/);
  });
}

test('rejects quoted and multiline external references', () => {
  const input = yaml.toString().replace("{$ref: '#/components/schemas/Audit'}", '\n                "$ref":\n                  https://attacker.invalid/schema');
  assert.throws(() => validateSpec(Buffer.from(input)), /references must point inside/);
});

for (const [name, suffix] of [
  ['external example', '\nexample: {externalValue: https://attacker.invalid/data}\n'],
  ['remote operation link', '\nlink: {operationRef: https://attacker.invalid/operation}\n'],
  ['dynamic reference', '\nx: {$dynamicRef: "#/components/schemas/Audit"}\n'],
  ['remote discriminator', '\nx: {discriminator: {propertyName: type, mapping: {a: "https://attacker.invalid/schema"}}}\n'],
  ['relative discriminator', '\nx: {discriminator: {propertyName: type, mapping: {a: other.yaml}}}\n'],
  ['alias expansion', '\nx: &x [1, 2]\ny: *x\n'],
  ['duplicate key', '\nopenapi: 3.0.1\n'],
  ['multiple documents', '\n---\nopenapi: 3.0.0\n'],
  ['custom tag', '\nx: !execute bad\n'],
]) {
  test(`rejects ${name}`, () => assert.throws(() => validateSpec(Buffer.concat([yaml, Buffer.from(suffix)]))));
}

test('accepts local discriminator schema names and internal references', () => {
  validateSpec(Buffer.concat([yaml, Buffer.from('\nx: {discriminator: {propertyName: type, mapping: {a: Audit, b: "#/components/schemas/Audit"}}}\n')]));
});

for (const [name, bytes] of [
  ['empty response', Buffer.from('')],
  ['HTML response', Buffer.from('<html>Sign in</html>')],
  ['API error JSON', Buffer.from('{"message":"Not Found"}')],
  ['invalid UTF-8', Buffer.from([0xff])],
  ['oversized spec', Buffer.alloc(5 * 1024 * 1024 + 1)],
  ['unsupported OpenAPI version', Buffer.from(yaml.toString().replace('3.0.0', '3.1.0'))],
]) {
  test(`rejects ${name}`, () => assert.throws(() => validateSpec(bytes)));
}

function fileResponse(overrides = {}) {
  return {
    type: 'file', path: sourcePath, encoding: 'base64', size: yaml.length,
    content: yaml.toString('base64'), ...overrides,
  };
}

test('fetch captures main once, then reads only that immutable commit', async () => {
  const urls = [];
  const snapshot = await fetchSnapshot('synthetic-token', async (url, options) => {
    urls.push(url);
    assert.equal(options.redirect, 'error');
    assert.equal(options.headers.Authorization, 'Bearer synthetic-token');
    assert.ok(options.signal);
    return Response.json(urls.length === 1 ? { sha: commit } : fileResponse());
  });
  assert.deepEqual(urls, [
    `https://api.github.com/repos/${repository}/commits/main`,
    `https://api.github.com/repos/${repository}/contents/${sourcePath}?ref=${commit}`,
  ]);
  assert.deepEqual(snapshot.bytes, yaml);
  assert.equal(snapshot.source.commit, commit);
});

test('missing credentials cause no request', async () => {
  await assert.rejects(fetchSnapshot('', () => assert.fail('must not request')), /Missing Obsidian/);
});

for (const status of [401, 403, 404, 429, 500]) {
  test(`HTTP ${status} fails without fallback or logging response bodies`, async () => {
    let calls = 0;
    await assert.rejects(fetchSnapshot('synthetic-token', async () => {
      calls++;
      return new Response('private response body', { status });
    }), error => error.message === `Obsidian read failed (HTTP ${status}).`);
    assert.equal(calls, 1);
  });
}

test('rejects malformed commit before requesting spec', async () => {
  let calls = 0;
  await assert.rejects(fetchSnapshot('synthetic-token', async () => {
    calls++;
    return Response.json({ sha: 'main?ref=evil' });
  }), /Invalid Obsidian commit/);
  assert.equal(calls, 1);
});

for (const [name, overrides] of [
  ['wrong path', { path: 'other.yaml' }],
  ['symlink', { type: 'symlink' }],
  ['omitted large-file content', { encoding: 'none', content: '' }],
  ['truncated download', { size: yaml.length + 1 }],
  ['non-spec body', { content: 'e30=', size: 2 }],
]) {
  test(`rejects ${name} from GitHub`, async () => {
    let calls = 0;
    await assert.rejects(fetchSnapshot('synthetic-token', async () => Response.json(
      ++calls === 1 ? { sha: commit } : fileResponse(overrides),
    )));
    assert.equal(calls, 2);
  });
}

async function workspace(t) {
  const directory = await mkdtemp(join(tmpdir(), 'sdk-spec-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  return directory;
}

test('stages a first snapshot, skips unchanged bytes, and stages real spec updates', async t => {
  const root = await workspace(t);
  const candidate = join(root, 'candidate');
  const destination = join(root, 'openapi');
  await writeSnapshot(candidate, yaml, provenance(yaml, commit));
  assert.equal(await stageSnapshot(candidate, destination), true);
  await writeSnapshot(candidate, yaml, provenance(yaml, 'b'.repeat(40)));
  assert.equal(await stageSnapshot(candidate, destination), false);
  assert.equal((await readSnapshot(destination)).source.commit, commit);
  const update = Buffer.from(yaml.toString().replace('Auditor API', 'Auditor API updated'));
  await writeSnapshot(candidate, update, provenance(update, 'c'.repeat(40)));
  assert.equal(await stageSnapshot(candidate, destination), true);
  assert.deepEqual((await readSnapshot(destination)).bytes, update);
});

test('tampered artifact is rejected without changing the destination', async t => {
  const root = await workspace(t);
  const candidate = join(root, 'candidate');
  const destination = join(root, 'openapi');
  await writeSnapshot(destination, yaml, provenance(yaml, commit));
  await writeSnapshot(candidate, Buffer.from('tampered'), provenance(yaml, commit));
  await assert.rejects(stageSnapshot(candidate, destination), /checksum/);
  assert.deepEqual((await readSnapshot(destination)).bytes, yaml);
});

test('wrong repository or source path is rejected', async t => {
  const root = await workspace(t);
  for (const override of [{ repository: 'other/repo' }, { path: 'other.yaml' }, { commit: 'main' }]) {
    await writeSnapshot(root, yaml, { ...provenance(yaml, commit), ...override });
    await assert.rejects(readSnapshot(root), /provenance/);
  }
});

test('snapshot symlinks are rejected', async t => {
  const root = await workspace(t);
  await writeSnapshot(root, yaml, provenance(yaml, commit));
  await writeFile(join(root, 'target'), yaml);
  await rm(join(root, 'auditor-api.yaml'));
  await symlink(join(root, 'target'), join(root, 'auditor-api.yaml'));
  await assert.rejects(readSnapshot(root), /regular files/);
});

const githubRoot = new URL('../../', import.meta.url);
async function config(path) {
  return parse(await readFile(new URL(path, githubRoot), 'utf8'));
}

test('sync separates Obsidian read credentials from SDK writes and generation', async () => {
  const sync = await config('workflows/sdk_spec_sync.yaml');
  assert.equal(sync.permissions.contents, 'read');
  assert.equal(sync.jobs.fetch.environment, 'sdk-spec-sync');
  assert.equal(sync.jobs.fetch.if, "github.ref == 'refs/heads/main'");
  assert.equal(sync.jobs.propose.needs, 'fetch');
  assert.equal(sync.jobs.propose.environment, undefined);
  assert.equal(sync.jobs.propose.permissions.contents, 'write');
  assert.equal(sync.jobs.propose.permissions['pull-requests'], 'write');
  const token = sync.jobs.fetch.steps.find(step => step.id === 'obsidian');
  assert.equal(token.with.repositories, 'obsidian');
  assert.equal(token.with['permission-contents'], 'read');
  const pr = sync.jobs.propose.steps.find(step => step.uses?.startsWith('peter-evans/'));
  assert.equal(pr.with.base, 'main');
  assert.deepEqual(pr.with['add-paths'].trim().split('\n'), ['openapi/auditor-api.yaml', 'openapi/source.json']);
  assert.ok(!JSON.stringify(sync).includes('SPEAKEASY_API_KEY'));
  const generation = await config('workflows/speakeasy_generate.yaml');
  assert.ok(!JSON.stringify(generation).includes('OBSIDIAN_'));
  const steps = generation.jobs.generate.steps;
  assert.ok(steps.findIndex(step => step.run?.includes('spec.mjs validate openapi')) < steps.findIndex(step => step.id === 'run-workflow'));
});

test('generation uses the committed YAML and only triggers on merged snapshots', async () => {
  const generation = await config('workflows/sdk_generation.yaml');
  assert.deepEqual(generation.on.push.branches, ['main']);
  assert.ok(generation.on.push.paths.includes('openapi/auditor-api.yaml'));
  assert.equal(generation.on.pull_request, undefined);
  assert.equal(generation.jobs.generate.with.mode, 'pr');
  const workflow = parse(await readFile(new URL('../.speakeasy/workflow.yaml', githubRoot), 'utf8'));
  assert.deepEqual(workflow.sources['Conduct an audit'].inputs, [{ location: './openapi/auditor-api.yaml' }]);
});
