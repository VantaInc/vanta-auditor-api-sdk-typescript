# Auditor API spec

## Purpose

Auditor SDK generation uses the reviewed `openapi/auditor-api.yaml` snapshot in
this repository. The source is
`apps/api-external/assets/__generated__/auditor-api/v1/api-spec.yaml` in
`VantaInc/obsidian`. This removes the mutable Mintlify document from generation
inputs, as required by [VM-19444](https://vanta.atlassian.net/browse/VM-19444).

## Requirements

- Review and merge spec changes before SDK generation consumes them. Review the
  YAML itself; reviewing generated SDK code alone is insufficient.
- Keep the spec self-contained: references, operation links and discriminator
  mappings must stay within the document. External example values are rejected.
- Confirm the spec describes the released public API. Obsidian `main` can contain
  undeployed changes; a successful sync does not establish release readiness.
- Obsidian credentials belong only to the sync job. Generation has no publishing
  credentials; publication retains the protected `sdk-publish` environment.

## Architecture

`.github/workflows/sdk_spec_sync.yaml` runs daily at 23:23 UTC or manually from
`main`. One job checks out the SDK and sparsely checks out the source YAML from
Obsidian `main` into sibling directories. It validates and copies that file, then
opens or updates `automation/obsidian-auditor-spec`. Only the YAML is committed;
the source commit appears in the PR body. Unchanged YAML creates no update.

The sync job combines an Obsidian read token and SDK write permission. No Obsidian
code is built or executed. Neither the source checkout nor its credentials enter
the separate generation and publishing jobs.

Merging a spec change triggers `.github/workflows/sdk_generation.yaml` in PR mode.
Its daily and manual triggers also use the merged snapshot. Speakeasy clones this
SDK repository independently, so the input must be committed rather than merely
copied into the generation job's initial checkout. There is no Mintlify fallback.

`.github/scripts/validate-spec.mjs` checks the OpenAPI 3.0 document and local
references with the SDK's lockfile-pinned `js-yaml` dependency. It is an input
boundary check, not a full OpenAPI validator or an assessment of generated code.
The dependency is also declared in `.speakeasy/gen.yaml` so regeneration retains it.

## Setup and verification

Before enabling sync:

1. Install a dedicated GitHub App only on Obsidian, with **Contents: read-only**.
   This grants repository-wide read access, not access limited to the YAML path.
2. Create the SDK repository environment `sdk-spec-sync`, restricted to the exact
   branch `main`, with no tags or administrator bypass. Store variable
   `OBSIDIAN_APP_CLIENT_ID` and secret `OBSIDIAN_APP_PRIVATE_KEY` there, not in
   repository secrets or generation/publishing environments.
3. Allow Actions to create PRs and allow the SHA-pinned actions in the workflow.
   Require PR review, stale-review dismissal and **SDK spec checks / validate**
   before merging. Keep the publishing approval gate enabled.
4. Review the initial snapshot, copied unchanged from
   [Obsidian commit 94d36495dcabdccb869045493853d63b556d0609](https://github.com/VantaInc/obsidian/commit/94d36495dcabdccb869045493853d63b556d0609).

Approve workflow runs on bot-created spec PRs when GitHub requests it. GitHub's
[`GITHUB_TOKEN` rules](https://docs.github.com/en/actions/concepts/security/github_token)
require approval for PR workflows created by this token. Run the checks again
after automated updates and review each updated diff before merging. Make source
corrections in Obsidian; automation manages the sync branch.

After merge, verify an unchanged sync creates no PR, a changed spec creates a
YAML-only PR with the correct source commit, and a dispatch from a non-`main`
branch cannot access the environment. Then verify merging a spec PR opens an SDK
generation PR and publishing still requires approval. These live checks need the
App/environment setup; local checks cannot establish them.

Local checks from the SDK root:

```sh
npm ci --ignore-scripts --no-audit --no-fund
node --test .github/scripts/validate-spec.test.mjs
node .github/scripts/validate-spec.mjs
actionlint .github/workflows/sdk_spec_sync.yaml .github/workflows/sdk_spec_check.yaml .github/workflows/sdk_generation.yaml
```
