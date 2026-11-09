# Verified Speakeasy action

Generate and Publish use a small patch against the exact reviewed upstream action. The upstream action otherwise downloads an unchecked bootstrap CLI even when SDK configuration names a generator version. This repository owns the patch; it is maintained separately from generated SDK code.

The entry workflows keep their triggers, inputs and secret mappings, and call local reusable implementations from the same SDK commit:

| Entry workflow | Implementation |
| --- | --- |
| `.github/workflows/sdk_generation.yaml` | `.github/workflows/speakeasy_generate.yaml` |
| `.github/workflows/sdk_publish.yaml` | `.github/workflows/speakeasy_publish.yaml` |

The implementations contain the TypeScript jobs extracted from the pinned upstream wrappers. Each job prepares its own action checkout; the npm token is passed only by Publish and used only in its publishing step.

`action.yml` selects the upstream source SHA; `prepare.sh` checks the same SHA and a clean tree. `runtime.patch` contains the Go/Docker changes and Go tests. `pinned-cli.json` is the single production CLI record: version, platform, artifact URL, archive SHA-256 and executable SHA-256. Preparation copies that record and `install_pinned_cli.py` into the action; installation and embedded Go verification consume the same record.

Keep `.speakeasy/workflow.yaml` in `speakeasyVersion: pinned` mode. Startup must reject an invalid CLI before authentication or release dispatch, and every CLI launch must verify the executable. Preparation failure removes the generated checkout; Publish callbacks must also require successful preparation. npm credentials belong only in the Publish step. Callback telemetry reports the SDK commit that owns the applied patch.

## Update the CLI

Choose an explicit X.Y.Z [Speakeasy release](https://github.com/speakeasy-api/speakeasy/releases), without a `v` prefix. For example:

```sh
python3 -B .github/actions/prepare-speakeasy/update_cli.py 1.806.0
```

The command verifies the archive against that release's published `checksums.txt` before opening it, hashes the executable without running it, and writes only `pinned-cli.json`. Review the one-file diff and checksum provenance. Routine CLI bumps do not change the upstream action SHA, runtime patch or workflows. Version strings in tests are fixtures, not production pins.

CI checks the real archive/executable against the committed pin with `update_cli.py --check`; it never replaces expected hashes with fresh upstream values. Complete normal licensed generation before adopting a new CLI.

## Edit the runtime patch or upstream source

From the SDK root, apply and edit the patch in a disposable checkout:

```sh
sdk_checkout="$PWD"
patch_dir="$sdk_checkout/.github/actions/prepare-speakeasy"
action_ref="$(awk '$1 == "ref:" { print $2 }' "$patch_dir/action.yml")"
action_worktree="$(mktemp -d)"
git clone https://github.com/speakeasy-api/sdk-generation-action.git "$action_worktree"
git -C "$action_worktree" checkout --detach "$action_ref"
git -C "$action_worktree" apply --unidiff-zero "$patch_dir/runtime.patch"
# Edit runtime source in action_worktree, then include new files except copied inputs:
git -C "$action_worktree" add -A -- . ':!internal/cli/pinned-cli.json' ':!internal/cli/install_pinned_cli.py' ':!.dockerignore'
git -C "$action_worktree" diff --cached --unified=0 > "$patch_dir/runtime.patch"
```

For an upstream source upgrade, first commit the applied patch in that disposable checkout, then rebase the commit onto the new revision and resolve conflicts. Regenerate the diff against the new revision and update both SHA locations (`action.yml` and `prepare.sh`). Do not simply change the SHA and reuse a zero-context patch: successful application alone does not establish compatibility. Review CLI launch sites and the TypeScript behavior from the upstream generation/publish wrappers.

Keep the copied pin and installer out of the patch; edit their maintained files beside `prepare.sh` instead. If compiling the disposable checkout, copy them into `internal/cli/` first.

## Validate

`.github/workflows/speakeasy_action_test.yaml` tests preparation/cleanup, CLI guards, pinned mode, the updater and installer, and verifies the real pinned artifact. It runs only for changes to the preparation action or related workflows/configuration, with read-only repository permissions and no secrets.

The SDK smoke workflow exercises the generated TypeScript SDK. Keeping the action tests in their own workflow makes them independent of the `skip-smoke` bypass and avoids setting up Go for unrelated SDK changes. If the workflows are consolidated later, preserve that independence from `skip-smoke`.

Start from a fresh SDK checkout with no `.speakeasy/temp/action` directory. This generated directory is ignored by Git; changes there persist only after regenerating `runtime.patch`. Preparation requires clean upstream source and cannot be reapplied to an already patched tree.

```sh
patch_dir="$PWD/.github/actions/prepare-speakeasy"
action_ref="$(awk '$1 == "ref:" { print $2 }' "$patch_dir/action.yml")"
git clone https://github.com/speakeasy-api/sdk-generation-action.git .speakeasy/temp/action
git -C .speakeasy/temp/action checkout --detach "$action_ref"
GITHUB_WORKSPACE="$PWD" GITHUB_ACTION_PATH="$patch_dir" bash "$patch_dir/prepare.sh"
bash "$patch_dir/test.sh"
python3 -B -m unittest discover -s "$patch_dir" -p 'test_*.py'
python3 -B "$patch_dir/update_cli.py" --check
(cd .speakeasy/temp/action && go test . ./internal/cli ./internal/configuration)
docker build --platform linux/amd64 -t speakeasy-verified .speakeasy/temp/action
docker run --rm --network none --entrypoint /bin/speakeasy speakeasy-verified --version
```

Check the actual image rejects missing/modified executables before authentication with networking disabled. Run SDK build/lint and inspect `npm pack --dry-run`: the existing package whitelist excludes this action tree, but recheck packaging when upgrading upstream source.

Complete a normal licensed generation before adopting a new CLI; unit tests and source-only probes do not prove full SDK generation or publication. If artifact/digest checks fail, investigate or restore a previously reviewed pin/patch while keeping verification and pinned mode. Do not bypass licensing or force a registry release as an integrity test.
