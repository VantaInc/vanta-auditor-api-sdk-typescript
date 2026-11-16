# Auditor API spec

SDK generation reads `auditor-api.yaml` from this repository. It never downloads
the spec from Mintlify. `source.json` records the Obsidian commit, source path and
SHA-256 of the exact YAML bytes. The checksum is calculated automatically; it
detects mismatched files, while PR review establishes approval of the input.

## Update flow

1. **Sync auditor spec** runs daily at 23:23 UTC or manually from `main`.
2. Its fetch job resolves `VantaInc/obsidian`'s `main` once, then retrieves
   `apps/api-external/assets/__generated__/auditor-api/v1/api-spec.yaml` at that
   exact commit. It does not build or execute Obsidian code.
3. It validates the YAML and transfers only the spec and provenance to a separate
   job, which opens or updates `automation/obsidian-auditor-spec`. Identical YAML
   produces no update, even if unrelated Obsidian commits have landed.
4. Review the spec PR and confirm its endpoints describe the released public API.
   Obsidian's `main` may contain changes that are not deployed yet. The sync branch
   is managed by automation; correct the source in Obsidian rather than editing
   this branch. If GitHub requests approval to run the bot-created PR's checks,
   select **Approve workflows to run**. Checks can also be run manually through
   **SDK spec checks**, selecting that branch.
5. Merging the spec PR triggers **Generate**, which opens a separate SDK update PR.
   The daily 00:00 UTC generation and manual trigger remain available and use
   only the snapshot already merged into this repository.
6. Review and merge the generated SDK PR. The existing `sdk-publish` approval
   still controls package publication.

Generation validates the local snapshot before starting Speakeasy. Missing files,
invalid YAML, mismatched provenance/checksum or external schema references fail
the job. There is no fallback to the live documentation URL. Publication uses the
merged SDK and does not refresh the source from Obsidian.

The parser accepts OpenAPI 3.0, disallows YAML aliases/duplicate keys and rejects
external `$ref`, operation links, discriminator mappings and external example
values. This is an input boundary check, not a full OpenAPI validator or a proof
that generated code is safe. Review the API changes and generated SDK as usual.

## GitHub setup before enabling sync

An organization administrator must create or approve a dedicated GitHub App:

- Install it on **only `VantaInc/obsidian`**.
- Grant **Contents: read-only** (plus GitHub's mandatory metadata access).
- Do not grant write, Actions, administration or secrets permissions.
- Contents access covers the whole Obsidian repository, not just this YAML.

In **each SDK repository**, create the environment **`sdk-spec-sync`**:

- Deployment branches/tags: selected branches, exact branch **`main`** only;
  no tag rules. Disable administrator bypass.
- No required reviewers are needed for the fetch itself; the resulting spec PR
  is the approval point before generation.
- Environment variable: **`OBSIDIAN_APP_CLIENT_ID`**.
- Environment secret: **`OBSIDIAN_APP_PRIVATE_KEY`**.

Keep the private key in this environment, not in repository secrets or
`sdk-automation`. Only the fetch job uses it. Its short-lived token is explicitly
scoped to Obsidian with Contents read permission and revoked when the fetch job
finishes. The PR job uses the SDK repository's own `GITHUB_TOKEN`; the generator
and publisher receive no Obsidian credential.

Allow GitHub Actions to create pull requests under **Settings → Actions → General**.
Keep required review, stale-approval dismissal, and the approval of the latest
push enabled for `main`; do not give the sync bot a bypass. Consider requiring the
**SDK spec checks / validate** check under the repository's branch rules.
Allow the SHA-pinned actions referenced by `sdk_spec_sync.yaml` if the organization
uses an action allowlist.

## Rollout and verification

This change includes an initial Obsidian snapshot for review alongside the
workflow change. Before merging, review that snapshot for public API readiness
and configure the App/environment. Merging the snapshot triggers generation;
the draft PR itself does not run generation or publish packages.

After merge:

1. Run **Sync auditor spec** from `main`. An unchanged source should create no PR.
2. Confirm a changed source opens a spec-only PR with both snapshot files and
   the source commit. Check that updating an open PR dismisses stale approvals.
3. Verify manual sync from a feature branch skips both jobs and the environment
   rejects non-`main` branches/tags.
4. Merge a reviewed spec update and verify generation opens its SDK PR without
   Obsidian credentials. Complete the normal review and publication checks.

Local checks (Node 22):

```sh
npm ci --prefix .github/scripts/sdk-spec --ignore-scripts --no-audit --no-fund
npm test --prefix .github/scripts/sdk-spec
node .github/scripts/sdk-spec/spec.mjs validate openapi
```

The same scripts/workflows are maintained in the TypeScript and Java SDK repos;
apply future sync changes to both.
