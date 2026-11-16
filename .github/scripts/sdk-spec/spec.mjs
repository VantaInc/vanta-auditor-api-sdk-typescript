import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, lstat } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseDocument } from 'yaml';

export const repository = 'VantaInc/obsidian';
export const sourcePath = 'apps/api-external/assets/__generated__/auditor-api/v1/api-spec.yaml';
const maxBytes = 5 * 1024 * 1024;
const commitPattern = /^[a-f0-9]{40}$/;
const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
export const digest = bytes => createHash('sha256').update(bytes).digest('hex');

export function validateSpec(bytes) {
  if (bytes.length === 0 || bytes.length > maxBytes) {
    throw new Error('Spec is empty or exceeds 5 MiB.');
  }
  let spec;
  try {
    const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    const document = parseDocument(text, { uniqueKeys: true, stringKeys: true, prettyErrors: false });
    if (document.errors.length || document.warnings.length) throw new Error();
    spec = document.toJS({ maxAliasCount: 0 });
  } catch {
    throw new Error('Spec must be one valid UTF-8 YAML document, without duplicate keys, aliases or unsupported tags.');
  }
  if (!isObject(spec) || !/^3\.0\.\d+$/.test(spec.openapi) ||
      !isObject(spec.info) || typeof spec.info.title !== 'string' ||
      typeof spec.info.version !== 'string' || !isObject(spec.paths) ||
      Object.keys(spec.paths).length === 0) {
    throw new Error('Expected a nonempty OpenAPI 3.0 document with info and paths.');
  }
  const pending = [{ value: spec, depth: 0 }];
  while (pending.length) {
    const { value, depth } = pending.pop();
    if (depth > 100) throw new Error('Spec nesting exceeds 100 levels.');
    if (value === null || typeof value !== 'object') continue;
    for (const [key, child] of Object.entries(value)) {
      if (['$ref', 'operationRef'].includes(key) &&
          (typeof child !== 'string' || !child.startsWith('#/'))) {
        throw new Error('Spec references must point inside this document.');
      }
      if (['$dynamicRef', '$recursiveRef', 'externalValue'].includes(key)) {
        throw new Error('External example values and dynamic references are not supported.');
      }
      if (key === 'discriminator' && isObject(child) && isObject(child.mapping)) {
        for (const target of Object.values(child.mapping)) {
          if (typeof target !== 'string' ||
              (!target.startsWith('#/') && !Object.hasOwn(spec.components?.schemas ?? {}, target))) {
            throw new Error('Discriminator mappings must name a local schema or local reference.');
          }
        }
      }
      pending.push({ value: child, depth: depth + 1 });
    }
  }
  return spec;
}

export function provenance(bytes, commit) {
  if (!commitPattern.test(commit)) throw new Error('Invalid Obsidian commit SHA.');
  validateSpec(bytes);
  return { repository, path: sourcePath, commit, sha256: digest(bytes) };
}

export async function readSnapshot(directory) {
  for (const filename of ['auditor-api.yaml', 'source.json']) {
    const stat = await lstat(join(directory, filename));
    if (!stat.isFile() || stat.size > maxBytes) throw new Error('Snapshot must contain regular files of at most 5 MiB.');
  }
  const bytes = await readFile(join(directory, 'auditor-api.yaml'));
  const source = JSON.parse(await readFile(join(directory, 'source.json'), 'utf8'));
  if (source.repository !== repository || source.path !== sourcePath ||
      !commitPattern.test(source.commit) || source.sha256 !== digest(bytes)) {
    throw new Error('Snapshot provenance or checksum does not match the spec.');
  }
  validateSpec(bytes);
  return { bytes, source };
}

export async function writeSnapshot(directory, bytes, source) {
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'auditor-api.yaml'), bytes);
  await writeFile(join(directory, 'source.json'), `${JSON.stringify(source, null, 2)}\n`);
}

export async function fetchSnapshot(token, request = fetch) {
  if (!token) throw new Error('Missing Obsidian read token.');
  const get = async endpoint => {
    const response = await request(`https://api.github.com/repos/${repository}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      redirect: 'error',
      signal: AbortSignal.timeout(30000),
    });
    if (!response.ok) throw new Error(`Obsidian read failed (HTTP ${response.status}).`);
    return response.json();
  };
  const { sha: commit } = await get('commits/main');
  if (!commitPattern.test(commit)) throw new Error('Invalid Obsidian commit SHA.');
  const file = await get(`contents/${sourcePath}?ref=${commit}`);
  if (file.type !== 'file' || file.path !== sourcePath || file.encoding !== 'base64' ||
      typeof file.content !== 'string' || !Number.isInteger(file.size) ||
      file.size <= 0 || file.size > maxBytes) {
    throw new Error('GitHub did not return an inline YAML file; no remote fallback is allowed.');
  }
  const bytes = Buffer.from(file.content, 'base64');
  if (bytes.length !== file.size) throw new Error('Downloaded spec size does not match GitHub metadata.');
  return { bytes, source: provenance(bytes, commit) };
}

export async function stageSnapshot(candidateDirectory, destination) {
  const candidate = await readSnapshot(candidateDirectory);
  let previous;
  try {
    previous = await readSnapshot(destination);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  // Unrelated Obsidian commits should not produce a provenance-only PR every day.
  if (previous?.source.sha256 === candidate.source.sha256) return false;
  await writeSnapshot(destination, candidate.bytes, candidate.source);
  return true;
}

async function main() {
  const [command, directory, destination] = process.argv.slice(2);
  if (!directory) throw new Error('Usage: spec.mjs fetch|validate|stage <directory> [destination]');
  if (command === 'fetch') {
    const snapshot = await fetchSnapshot(process.env.OBSIDIAN_TOKEN);
    await writeSnapshot(directory, snapshot.bytes, snapshot.source);
    console.log(`Fetched auditor spec from Obsidian commit ${snapshot.source.commit}.`);
  } else if (command === 'validate') {
    const { source } = await readSnapshot(directory);
    console.log(`Validated local auditor spec from Obsidian commit ${source.commit}.`);
  } else if (command === 'stage' && destination) {
    const changed = await stageSnapshot(directory, destination);
    console.log(changed ? 'Staged updated auditor spec for review.' : 'Auditor spec is unchanged.');
  } else {
    throw new Error('Unknown command or missing destination.');
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => {
    // Parser errors and HTTP bodies may contain remote data; never echo them here.
    console.error(`Spec operation failed: ${error.message.split('\n')[0]}`);
    process.exitCode = 1;
  });
}
