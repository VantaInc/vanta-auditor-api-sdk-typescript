#!/usr/bin/env bash
set -euo pipefail

candidate=false
if [[ "${1:-}" == --candidate && $# == 1 ]]; then
  candidate=true
elif [[ $# != 0 ]]; then
  echo 'Usage: check-staged-upload-regeneration.sh [--candidate]' >&2
  exit 2
fi
repo="$(git rev-parse --show-toplevel)"
cli_path="$(command -v "${SPEAKEASY_CLI:-speakeasy}")"
node --input-type=module - "$repo" "$cli_path" <<'JS'
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const [repo, cli] = process.argv.slice(2);
const pin = JSON.parse(readFileSync(`${repo}/.github/actions/prepare-speakeasy/pinned-cli.json`));
if (createHash('sha256').update(readFileSync(cli)).digest('hex') !== pin.binary_sha256) {
  throw new Error('Speakeasy executable does not match the reviewed CLI pin.');
}
JS

scratch="$(mktemp -d)"
trap 'rm -rf -- "$scratch"' EXIT
git clone --quiet --no-hardlinks "$repo" "$scratch/sdk"
cd "$scratch/sdk"
echo "Checking committed SDK $(git rev-parse HEAD); candidate overlay: $candidate"
mkdir -p .speakeasy/temp/upload-check
schema="$PWD/.speakeasy/temp/upload-check/input.json"
node --input-type=module - "$schema" <<'JS'
import { writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const response = await fetch('https://vanta.mintlify.app/reference/auditor-api.json');
if (!response.ok) throw new Error(`Public schema fetch failed: ${response.status}`);
const source = await response.text();
JSON.parse(source);
writeFileSync(process.argv[2], source);
writeFileSync(`${process.argv[2]}.baseline`, source);
console.log(`Public schema SHA-256: ${createHash('sha256').update(source).digest('hex')}`);
JS
if $candidate; then
  "$cli_path" overlay apply --schema "$schema.baseline" \
    --overlay .speakeasy/auditor-files-candidate-overlay.yaml --out "$schema"
fi
node --input-type=module - "$schema" <<'JS'
import { readFileSync, writeFileSync } from 'node:fs';
import { isDeepStrictEqual } from 'node:util';
const schemaPath = process.argv[2];
const source = JSON.parse(readFileSync(schemaPath));
const baseline = JSON.parse(readFileSync(`${schemaPath}.baseline`));
const root = '/audits/{auditId}/information-requests/{requestId}/auditor-files/uploads';
for (const [path, id] of [[root, 'InitiateInformationRequestAuditorFileUpload'], [`${root}/finalize`, 'FinalizeInformationRequestAuditorFileUpload']]) {
  if (source.paths[path]?.post?.operationId !== id) {
    throw new Error('Upload operations are absent. Publish the API source before ordinary regeneration; --candidate is draft-only.');
  }
}
for (const [path, value] of Object.entries(baseline.paths)) {
  if (!isDeepStrictEqual(source.paths[path], value)) throw new Error(`Existing path changed: ${path}`);
}
for (const [name, value] of Object.entries(baseline.components.schemas)) {
  if (!isDeepStrictEqual(source.components.schemas[name], value)) throw new Error(`Existing schema changed: ${name}`);
}
const grant = source.components.schemas.AuditorFileUploadGrant;
for (const name of ['uploadId', 'url', 'fields', 'maxSizeBytes', 'transferExpiresAt', 'finalizationExpiresAt']) {
  if (!grant.required.includes(name)) throw new Error(`Missing required grant field: ${name}`);
}
if (grant.properties.fields.additionalProperties?.type !== 'string') throw new Error('Signed fields must remain a string dictionary.');
writeFileSync('.speakeasy/workflow.yaml', JSON.stringify({
  workflowVersion: '1.0.0', speakeasyVersion: 'pinned',
  sources: { local: { inputs: [{ location: schemaPath }], overlays: [{ location: '.speakeasy/speakeasy-modifications-overlay.yaml' }] } },
  targets: { vanta: { target: 'typescript', source: 'local' } },
}));
JS

helper_hash="$(sha256sum src/auditor-files.ts)"
check_generation() {
  "$cli_path" run --auto-yes --output console --skip-versioning --skip-upload-spec --skip-compile --skip-testing
  test "$helper_hash" = "$(sha256sum src/auditor-files.ts)"
  if [[ -n "$(git diff --name-only --diff-filter=D)" ]]; then
    echo 'Generation deleted tracked files.' >&2
    exit 1
  fi
  while IFS= read -r file; do
    case "$file" in
      src/auditor-files.ts|docs/auditor-files.md|examples/README.md) exit 1 ;;
      src/*|docs/models/*|docs/sdks/*|README.md|USAGE.md|FUNCTIONS.md|package.json|package-lock.json|jsr.json|.speakeasy/gen.*|.speakeasy/workflow.yaml|examples/audits*.example.ts) ;;
      *) echo "Unexpected regeneration change: $file" >&2; exit 1 ;;
    esac
  done < <(git diff --name-only)
  npm run build
  npm run lint
  npm --prefix smoke-test run check:auditor-files-example
  npm --prefix smoke-test run test:auditor-files
  npm --prefix smoke-test run test:module-format
}
npm ci --ignore-scripts
npm --prefix smoke-test ci --ignore-scripts
npm --prefix examples ci --ignore-scripts
check_generation
node --input-type=module - "$schema" <<'JS'
import { readFileSync, writeFileSync } from 'node:fs';
const path = process.argv[2];
const schema = JSON.parse(readFileSync(path));
schema.components.schemas.UploadedAuditorFile.properties.sdkRegenerationProbe = { type: 'string' };
writeFileSync(path, JSON.stringify(schema));
JS
check_generation
rg -q 'sdkRegenerationProbe' src/models/components/uploadedauditorfile.ts

mkdir "$scratch/packed" "$scratch/consumer"
npm pack --ignore-scripts --pack-destination "$scratch/packed"
cp smoke-test/module-format-auditor-files.mjs "$scratch/consumer/check.mjs"
cd "$scratch/consumer"
printf '{"private":true,"type":"module"}\n' > package.json
npm install --ignore-scripts "$scratch/packed/"*.tgz
node check.mjs
echo 'Ordinary and additive regeneration, helper tests, and packed ESM/CommonJS uploads passed.'
