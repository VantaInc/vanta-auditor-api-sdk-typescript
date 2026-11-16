# One-time TypeScript SDK secret migration

Copy the current repository credentials into protected environments without retrieving their values or regenerating them. This is a temporary prerequisite to [the publishing protection PR](https://github.com/VantaInc/vanta-auditor-api-sdk-typescript/pull/91), part of [PEX-12001](https://vanta.atlassian.net/browse/PEX-12001).

The migration is TypeScript-only. It does not publish a package, delete source secrets, revoke provider credentials, change environment protection rules, or close the security tickets. The source credential names were verified at repository scope on November 16, 2026; no organization secrets with those names were listed.

## Fixed copy targets

| Existing repository secret | Destination environment | Destination secret |
| --- | --- | --- |
| `SPEAKEASY_API_KEY` | `sdk-automation` | `SPEAKEASY_API_KEY` |
| `SPEAKEASY_API_KEY` | `sdk-publish` | `SPEAKEASY_API_KEY` |
| `NPM_TOKEN` | `sdk-publish` | `NPM_TOKEN` |

The source values are supplied to the migration job by GitHub Actions. The script sends each value through standard input to `gh secret set`, which encrypts it for GitHub's destination environment. No values, hashes, CLI response bodies, secret files, artifacts, or workflow outputs are logged or created.

GitHub CLI removes trailing carriage-return/newline characters (CR/LF) from standard input. Both validation and copy mode reject either source if it ends with CR/LF, before any API calls or writes. The CLI adapter also rejects these values before starting `gh`. Internal line breaks and surrounding spaces/tabs are preserved. If this check fails, stop and review an exact-value migration method or provider rotation; do not trim or print the existing secret to make the check pass.

## Prepare the temporary token

1. Open your GitHub **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
2. Name it `typescript-sdk-secret-migration` and select **VantaInc** as the resource owner.
3. Select only **vanta-auditor-api-sdk-typescript** under repository access.
4. Grant **Repository permissions → Environments → Read and write** for destination secrets and **Actions → Read-only** for checking environment protections and branch policies. Leave other permissions unset except GitHub's mandatory metadata access. Keep the token's lifetime and repository scope narrow.
5. Use a short expiration, such as one day. If Vanta requires token approval, have it approved before running the migration. Do not replace a rejected fine-grained token with a broad classic token.
6. Save the token directly under **Repository Settings → Environments → sdk-secret-migration → Environment secrets**, named **MIGRATION_GITHUB_TOKEN**. Do not put it in repository secrets, workflow inputs, or chat.

Only `MIGRATION_GITHUB_TOKEN` should exist in the migration environment. SDK source secrets remain at repository scope so they cannot be shadowed by environment copies during this run. The ordinary `GITHUB_TOKEN` is used only for checkout, with read-only contents permission.

## Required environment configuration

All three environments must already exist and allow exactly **Branch: main**, with no tag rules and administrator bypass disabled.

- `sdk-automation`: no required reviewers; no secrets yet.
- `sdk-publish`: require only the `grc-partner-enabled-experiences` team, prevent self-review, and no secrets yet.
- `sdk-secret-migration`: the same reviewer/self-review requirements; contains only `MIGRATION_GITHUB_TOKEN`.

The script checks these rules before writing. It also checks source values are nonempty and verifies complete destination secret inventories. It refuses to overwrite any existing destination secret. Do not edit destination secrets or protection rules concurrently: GitHub's create/update API does not provide an atomic create-only operation.

## Run validation and then copy

1. Review and merge this migration PR into `main`. It has no push/schedule trigger; merging it does not copy secrets. Keep the publishing protection PR draft until provisioning is complete.
2. Open **Actions → Migrate SDK secrets once → Run workflow**. Select branch **main** and mode **validate** (the default).
3. Have another eligible PEX team member approve the `sdk-secret-migration` environment request. Self-approval is blocked.
4. Confirm the run reports successful preflight and **Validation only: no secrets were written or deleted.** This checks configuration and read access; it cannot prove the token's write permission without a write.
5. Run the workflow again from **main**, this time choosing **copy**, and obtain approval again.
6. Confirm success for all three fixed copy targets and the destination-name verification. This proves GitHub accepted the writes and the expected names are present; GitHub cannot return the stored values for comparison. Separate environment-scoped runtime checks are still required before completing the cutover.

The workflow never dispatches generation or publication. Any other ref, repository, event, or mode is rejected. A concurrency group serializes runs of this migration workflow.

## Failures and retries

Validation failure writes nothing. A copy failure can leave a partial set of destination secrets, because GitHub has no multi-secret transaction. The script stops immediately; it does not roll back or delete anything. Check the fixed target success messages and destination metadata, then review the partial state before retrying. A blind retry fails because destinations are no longer empty. Any removal of partial destination copies should be a deliberate admin action after confirming they are not in use.

CLI output and unexpected exception details are suppressed to avoid exposing credential values. Diagnose failures by inspecting token permissions/approval/expiration and the environment settings, rather than enabling debug logs or printing secrets.

## Finish the cutover and remove this mechanism

After copying, verify the new environments and coordinate activation of PR #91 with removal of the old repository copies. Account for queued/running workflows first: GitHub reads repository/organization secrets when a run is queued. Removing stored copies does not erase credentials already obtained by a run.

Confirm generation still opens PRs, publishing waits for approval, and unauthorized refs/modified workflows cannot obtain publishing credentials. Complete run-history review and any required provider-credential rotation separately; copying the same values is not rotation. Do not close VM-19444 while specification integrity remains unresolved.

Revoke the temporary migration token promptly after copying is complete, delete `MIGRATION_GITHUB_TOKEN`, and remove the migration workflow, script, tests/test workflow, and temporary environment once no longer needed. The dedicated token should not remain available for old migration runs to reuse.

## Local checks

```sh
python3 -B -m unittest discover -s .github/scripts -p 'test_migrate_sdk_secrets.py' -v
actionlint -shellcheck= -pyflakes=
git diff --check
```

Tests use synthetic values and a fake GitHub API. They do not access real credentials or prove live environment enforcement.

## References

- [GitHub CLI environment secret writes](https://cli.github.com/manual/gh_secret_set)
- [Environment secrets API and permissions](https://docs.github.com/en/rest/actions/secrets#create-or-update-an-environment-secret)
- [Environment configuration read permissions](https://docs.github.com/en/rest/deployments/environments#get-an-environment)
- [Branch-policy read permissions](https://docs.github.com/en/rest/deployments/branch-policies#list-deployment-branch-policies)
- [Fine-grained personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- [Secret precedence and read timing](https://docs.github.com/en/actions/reference/security/secrets)
