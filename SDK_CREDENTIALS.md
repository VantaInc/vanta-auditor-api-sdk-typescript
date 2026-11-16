# SDK credential setup

Generate and Publish use protected GitHub environments. **Configure the environments and provision their secrets before merging the workflow changes.** The credential values are not currently available to complete this cutover; coordinate access or replacement credentials with Victor.

This implements the workflow portion of [PEX-12001](https://vanta.atlassian.net/browse/PEX-12001) / [VM-19442](https://vanta.atlassian.net/browse/VM-19442) and the publication approval requirement of [VM-19444](https://vanta.atlassian.net/browse/VM-19444). The specification-integrity requirement remains separate and unresolved.

## Configure GitHub environments

Under **Settings → Environments**, create both environments:

| Setting | `sdk-automation` | `sdk-publish` |
| --- | --- | --- |
| Jobs | Generate and release preparation | `publish-npm` |
| Deployment branches and tags | Selected branches and tags; add **Branch: main** only | Selected branches and tags; add **Branch: main** only |
| Tag rules | None | None |
| Required reviewers | None; keep nightly generation automatic | Select the agreed reviewer/team |
| Prevent self-review | Not applicable | Enable |
| Administrator bypass | Disable where available | Disable |
| Environment secrets | `SPEAKEASY_API_KEY` | `SPEAKEASY_API_KEY`, `NPM_TOKEN` |

The reviewer owner must be confirmed; PEX is proposed. Protect `main` with required PR reviews and checks. Do not use “Protected branches only”: that can permit other protected branches. Release preparation can create GitHub release metadata before approval; the approval gates package publication and access to publishing credentials.

Environment declarations belong on the jobs in `speakeasy_generate.yaml` and `speakeasy_publish.yaml`, not the entry jobs that call reusable workflows. Explicit caller secret mappings and reusable secret declarations use the same names as the environment secrets. A caller mapping can be empty until the job selects its environment. Required declarations check that the caller supplies the mapping; the first step checks that the environment supplied nonempty values.

The main-only YAML conditions prevent accidental dispatches. They are not the security boundary: a writer can modify YAML on another branch. GitHub's environment branch rules and publishing approval enforce access outside the workflow code. Removing the environment from a modified workflow must leave no repository or organization secret to fall back to.

## Coordinate the cutover

1. Confirm admin access, environment protection rules, reviewer ownership, and secret names. Obtain values from the approved credential store or provision replacements with the credential owners. Do not recover values through workflow logs.
2. Review Publish and Generate history for runs on non-main refs. Rotate credentials if such runs are found, as required by the finding, or if the exposure assessment otherwise requires it. Check alternate registry publishing authority, including trusted-publisher/OIDC configuration.
3. Provision the environment secrets. The Speakeasy key is needed in both environments; publishing/signing credentials belong only in `sdk-publish`.
4. Coordinate merge and secret migration during a controlled workflow window. Account for queued/running jobs before deleting broader secrets: repository and organization secrets are read when a run is queued. Stop affected runs as appropriate; deleting a secret does not revoke an already obtained credential.
5. Remove these credentials from **Settings → Secrets and variables → Actions**. Remove this repository's access to equivalent organization secrets; preserve access needed by unrelated repositories. Complete this removal before calling the remediation effective.
6. Validate both rejected runs and the normal generation/publication paths below. If setup is incomplete, the workflow deliberately fails on missing credentials. Do not restore broad secret access as a workaround.

No GitHub settings or secret values are changed by this PR. GitHub can create an unconfigured environment when a workflow references a new name, so the YAML declaration alone does not establish the protection rules.

## GitHub token permissions

`GITHUB_TOKEN` is issued automatically for each job and is not migrated into an environment. Generation keeps `contents: write` and `pull-requests: write` to push generated branches and open PRs. Publish keeps `contents: write` to create releases and update their published status. Both retain `id-token: write` because the pinned Speakeasy action uses OIDC to link workflow runs with Speakeasy. Unused checks/status writes and Publish's PR-write permission are removed.

These permissions and branch guards do not make the automatic token unavailable on other branches. Review repository/organization Actions policies and branch protection separately. A read-only default is useful but is not a main-only enforcement rule.

## Verification evidence

- Feature-branch dispatch, a modified feature workflow, PR refs, tags (including a tag named `main`), and old-workflow reruns cannot obtain publishing credentials or publish. Test both requesting the protected environment and omitting it.
- Use harmless secret-presence checks; never log or transmit actual values. Local syntax and condition checks do not prove GitHub environment enforcement.
- A main publishing run waits for approval; without approval it receives no publishing credentials.
- Main generation still opens a PR and receives no publishing/signing credentials.
- Legitimate npm publication succeeds. Record the workflow run and registry artifact; for Java, retain end-to-end generation and signature evidence.
- Attach remediation PRs, sanitized environment/secret-scope evidence, run-history findings, rotation results where required, and run/registry links to the tickets. Keep VM-19444 open until specification integrity is also resolved.

## References

- [GitHub environment restrictions and approvals](https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments)
- [Reusable workflow secret resolution](https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows)
- [When GitHub reads secrets](https://docs.github.com/en/actions/reference/security/secrets)
- [Speakeasy support recommendation](https://vantahq.slack.com/archives/C07AL5S9RB8/p1793881808470339?thread_ts=1793816991.942829)
