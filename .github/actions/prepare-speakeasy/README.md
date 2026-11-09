# Verified Speakeasy action

Generate and Publish use a small patch against the exact reviewed upstream action. The upstream action otherwise downloads an unchecked bootstrap CLI even when SDK configuration names a generator version. This repository owns the patch; it is maintained separately from generated SDK code.

`action.yml` selects the upstream source SHA; `prepare.sh` checks the same SHA and a clean tree. `runtime.patch` contains the runtime changes and tests, including `internal/cli/pinned-cli.json`: the CLI version, platform, artifact URL, archive SHA-256 and executable SHA-256 shared by installation and runtime verification.

Keep `.speakeasy/workflow.yaml` in `speakeasyVersion: pinned` mode. Startup must reject an invalid CLI before authentication or release dispatch, and every CLI launch must verify the executable. Preparation failure removes the generated checkout; Publish callbacks must also require successful preparation. npm credentials belong only in the Publish step. Callback telemetry reports the SDK commit that owns the applied patch.

## Update the CLI or patch

Obtain the exact Linux amd64 artifact and published checksum from the [official Speakeasy release](https://github.com/speakeasy-api/speakeasy/releases). Verify the archive before opening it, then hash the executable without running it. Update the pin record and action version descriptions; record checksum provenance in the PR. A CLI-only update does not require changing the upstream source SHA.

From the SDK root, apply and edit the patch in a disposable checkout:

```sh
sdk_checkout="$PWD"
patch_dir="$sdk_checkout/.github/actions/prepare-speakeasy"
action_ref="$(awk '$1 == "ref:" { print $2 }' "$patch_dir/action.yml")"
action_worktree="$(mktemp -d)"
git clone https://github.com/speakeasy-api/sdk-generation-action.git "$action_worktree"
git -C "$action_worktree" checkout --detach "$action_ref"
git -C "$action_worktree" apply --unidiff-zero "$patch_dir/runtime.patch"
# Edit the pin or runtime source in action_worktree, then include new files:
git -C "$action_worktree" add -A
git -C "$action_worktree" diff --cached --unified=0 > "$patch_dir/runtime.patch"
```

For an upstream source upgrade, first commit the applied patch in that disposable checkout, then rebase the commit onto the new revision and resolve conflicts. Regenerate the diff against the new revision and update both SHA locations (`action.yml` and `prepare.sh`). Do not simply change the SHA and reuse a zero-context patch: successful application alone does not establish compatibility. Review CLI launch sites and the TypeScript behavior from the upstream generation/publish wrappers.

## Validate

`.github/workflows/speakeasy_action_test.yaml` tests the maintained Go action and Python installer: patch application/cleanup, rejection of missing or modified binaries, pinned-mode enforcement and checksum failures. It runs only for changes to the preparation action or related workflows/configuration, with read-only repository permissions and no secrets.

The SDK smoke workflow exercises the generated TypeScript SDK. Keeping the action tests in their own workflow makes them independent of the `skip-smoke` bypass and avoids setting up Go for unrelated SDK changes. If the workflows are consolidated later, preserve that independence from `skip-smoke`.

Start from a fresh SDK checkout with no `.speakeasy/temp/action` directory. This generated directory is ignored by Git; changes there persist only after regenerating `runtime.patch`. Preparation requires clean upstream source and cannot be reapplied to an already patched tree.

```sh
patch_dir="$PWD/.github/actions/prepare-speakeasy"
action_ref="$(awk '$1 == "ref:" { print $2 }' "$patch_dir/action.yml")"
git clone https://github.com/speakeasy-api/sdk-generation-action.git .speakeasy/temp/action
git -C .speakeasy/temp/action checkout --detach "$action_ref"
GITHUB_WORKSPACE="$PWD" GITHUB_ACTION_PATH="$patch_dir" bash "$patch_dir/prepare.sh"
bash "$patch_dir/test.sh"
(cd .speakeasy/temp/action && go test . ./internal/cli ./internal/configuration)
bash .speakeasy/temp/action/testing/verified-cli-install_test.sh
docker build --platform linux/amd64 -t speakeasy-verified .speakeasy/temp/action
docker run --rm --network none --entrypoint /bin/speakeasy speakeasy-verified --version
```

Check the actual image rejects missing/modified executables before authentication with networking disabled. Run SDK build/lint and inspect `npm pack --dry-run`: the existing package whitelist excludes this action tree, but recheck packaging when upgrading upstream source.

Complete a normal licensed generation before adopting a new CLI; unit tests and source-only probes do not prove full SDK generation or publication. If artifact/digest checks fail, investigate or restore a previously reviewed pin/patch while keeping verification and pinned mode. Do not bypass licensing or force a registry release as an integrity test.
