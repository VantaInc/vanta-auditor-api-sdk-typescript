# Auditor API spec

## Foundation

Obsidian owns the auditor API definition. Each SDK generation run reads
`apps/api-external/assets/__generated__/auditor-api/v1/api-spec.yaml` from the
latest Obsidian `main` commit, records that SHA in CI, and opens an SDK PR for
review before merge. There is no duplicated input snapshot or separate spec PR.
This is the source and review model chosen for
[VM-19444](https://vanta.atlassian.net/browse/VM-19444).

## Requirements

- Resolve Obsidian `main` once per fetch, and generate only from that checkout's
  bytes. Record its commit SHA in both job logs and the generation summary.
- Reject missing, malformed or externally referenced inputs without a Mintlify
  fallback. No Obsidian code is built or executed.
- Review the generated SDK changes before merging. Confirm the API is ready to
  expose: Obsidian `main` may contain undeployed changes.
- Keep Obsidian credentials in the fetch job, publishing credentials in the
  protected publishing job, and neither in SDK generation.

## Architecture

`.github/workflows/sdk_generation.yaml` retains its daily/manual triggers. Its
`spec` job sparsely checks out the YAML with a read-only GitHub App token, logs the
resolved SHA, and uploads only that file in an artifact named for the commit.
The artifact and commit output belong to the same workflow run. Re-running the
fetch can select a newer `main`; re-running only generation reuses the successful
fetch's commit and artifact while it is retained.

`.github/workflows/speakeasy_generate.yaml` downloads the corresponding artifact
into `auditor-spec/api-spec.yaml` and validates it before preparing Speakeasy. The
pinned action clones the SDK into `$GITHUB_WORKSPACE/repo`; the workflow input
`../auditor-spec/api-spec.yaml` reaches the sibling artifact in the mounted
workspace. Keep this layout aligned when changing the action or input path.

`.github/scripts/validate-spec.mjs` checks the OpenAPI 3.0 document and local
references using the SDK's lockfile-pinned `js-yaml`. It is not a full OpenAPI
validator or an assessment of generated code. `.speakeasy/gen.yaml` preserves the
dependency during regeneration. Release tagging uses the existing workflow lock
and registry revisions; publication does not re-fetch Obsidian or regenerate from
its current `main`.

## Verification and setup

Before merging, install a dedicated GitHub App only on Obsidian with **Contents:
read-only**. This grants repository-wide read access, not access limited to the
YAML path. In the SDK repository, create `sdk-spec-fetch`, restricted to the exact
branch `main`, with no tags or administrator bypass. Store environment variable
`OBSIDIAN_APP_CLIENT_ID` and secret `OBSIDIAN_APP_PRIVATE_KEY` there, not in
repository secrets or generation/publishing environments. Allow the SHA-pinned
actions used by the workflows. Keep required SDK PR review and the existing
`sdk-publish` approval gate.

After setup, verify a generation run logs the Obsidian SHA, transfers only the
YAML, validates it, and opens an SDK PR. Confirm the first generated PR preserves
`js-yaml` and updates `.speakeasy/workflow.lock` to the local input path. Verify a
non-`main` dispatch cannot access the fetch environment, missing/invalid inputs
stop generation, and publication uses the reviewed SDK without fetching a new
spec. If the one-day artifact has expired, start a new generation run.

Local checks from the SDK root, after `npm ci --ignore-scripts`:

```sh
node --test .github/scripts/*.test.mjs
node .github/scripts/validate-spec.mjs /path/to/api-spec.yaml
npm run lint
npm run build
actionlint .github/workflows/sdk_generation.yaml .github/workflows/speakeasy_generate.yaml .github/workflows/sdk_spec_check.yaml
```

Local checks do not establish App authentication, environment enforcement, or
licensed end-to-end generation and publication.
