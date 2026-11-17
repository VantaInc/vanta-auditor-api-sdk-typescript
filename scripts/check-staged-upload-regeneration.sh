#!/usr/bin/env bash
set -euo pipefail

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
trap 'if [[ "${KEEP_REGEN_CHECK:-0}" == 1 ]]; then echo "Retained check: $scratch"; else rm -rf -- "$scratch"; fi' EXIT
git clone --quiet --no-hardlinks "$repo" "$scratch/sdk"
cd "$scratch/sdk"
echo "Checking committed SDK $(git rev-parse HEAD)"
schema="$scratch/input.json"
node --input-type=module - "$schema" <<'JS'
import { writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const response = await fetch('https://vanta.mintlify.app/reference/auditor-api.json');
if (!response.ok) throw new Error(`Public schema fetch failed: ${response.status}`);
const source = await response.text();
JSON.parse(source);
const hash = createHash('sha256').update(source).digest('hex');
writeFileSync(process.argv[2], source);
console.log(`Public schema SHA-256: ${hash}`);
JS
node --input-type=module - "$schema" <<'JS'
import { readFileSync, writeFileSync } from 'node:fs';
const schemaPath = process.argv[2];
const source = JSON.parse(readFileSync(schemaPath));
const root = '/audits/{auditId}/information-requests/{requestId}/auditor-files/uploads';
for (const [path, id] of [[root, 'InitiateInformationRequestAuditorFileUpload'], [`${root}/finalize`, 'FinalizeInformationRequestAuditorFileUpload']]) {
  if (source.paths[path]?.post?.operationId !== id) {
    throw new Error('Upload operations are absent. Publish the API source before regeneration.');
  }
}
const grant = source.components.schemas.AuditorFileUploadGrant;
for (const name of ['uploadId', 'url', 'fields', 'maxSizeBytes', 'transferExpiresAt', 'finalizationExpiresAt']) {
  if (!grant.required.includes(name)) throw new Error(`Missing required grant field: ${name}`);
}
const fieldSchema = grant.properties.fields;
const fields = fieldSchema.$ref?.startsWith('#/components/schemas/')
  ? source.components.schemas[fieldSchema.$ref.slice('#/components/schemas/'.length)]
  : fieldSchema;
if (fields?.additionalProperties?.type !== 'string') throw new Error('Signed fields must remain a string dictionary.');
writeFileSync('.speakeasy/workflow.yaml', JSON.stringify({
  workflowVersion: '1.0.0', speakeasyVersion: 'pinned',
  sources: { local: { inputs: [{ location: schemaPath }], overlays: [{ location: '.speakeasy/speakeasy-modifications-overlay.yaml' }] } },
  targets: { vanta: { target: 'typescript', source: 'local' } },
}));
JS

helper_hash="$(sha256sum src/auditor-files.ts)"
check_generation() {
  "$cli_path" run --auto-yes --output console --skip-versioning --skip-upload-spec --skip-compile --skip-testing
  if [[ "$helper_hash" != "$(sha256sum src/auditor-files.ts)" ]]; then
    git diff -- src/auditor-files.ts >&2
    echo 'Generation changed the helper source.' >&2
    exit 1
  fi
  if [[ -n "$(git diff --name-only --diff-filter=D)" ]]; then
    echo 'Generation deleted tracked files.' >&2
    exit 1
  fi
  while IFS= read -r file; do
    case "$file" in
      src/auditor-files.ts|docs/auditor-files.md|examples/README.md)
        echo "Generation changed maintained content: $file" >&2; exit 1 ;;
      README.md|docs/sdks/audits/README.md|package.json|package-lock.json|jsr.json) ;;
      .speakeasy/gen.lock|.speakeasy/gen.yaml|.speakeasy/workflow.yaml|.speakeasy/workflow.lock) ;;
      src/lib/config.ts|src/sdk/audits.ts|src/models/components/index.ts|src/models/errors/index.ts|src/models/operations/index.ts) ;;
      src/funcs/auditsInitiateInformationRequestAuditorFileUpload.ts|src/funcs/auditsFinalizeInformationRequestAuditorFileUpload.ts) ;;
      src/models/operations/initiateinformationrequestauditorfileupload.ts|src/models/operations/finalizeinformationrequestauditorfileupload.ts) ;;
      src/models/components/auditorfileuploadgrant.ts|src/models/components/initiateauditorfileuploadinput.ts|src/models/components/finalizeauditorfileuploadinput.ts|src/models/components/uploadedauditorfile.ts|src/models/errors/outbounderror.ts) ;;
      docs/models/operations/initiateinformationrequestauditorfileuploadrequest.md|docs/models/operations/finalizeinformationrequestauditorfileuploadrequest.md) ;;
      docs/models/components/auditorfileuploadgrant.md|docs/models/components/initiateauditorfileuploadinput.md|docs/models/components/finalizeauditorfileuploadinput.md|docs/models/components/uploadedauditorfile.md|docs/models/errors/outbounderror.md) ;;
      *) echo "Unexpected regeneration change: $file" >&2; exit 1 ;;
    esac
  done < <({ git diff --name-only; git ls-files --others --exclude-standard; } | sort -u)
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
