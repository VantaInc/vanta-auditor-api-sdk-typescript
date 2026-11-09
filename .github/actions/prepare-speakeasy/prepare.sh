#!/usr/bin/env bash
set -euo pipefail
action_dir="$GITHUB_WORKSPACE/.speakeasy/temp/action"
trap 'rm -rf -- "$action_dir"' ERR
test "$(git -C "$action_dir" rev-parse HEAD)" = 6eb2c860da69d3f4cefaa5b8293098a1820c2437
git -C "$action_dir" diff --quiet HEAD --
git -C "$action_dir" apply --unidiff-zero --check "$GITHUB_ACTION_PATH/runtime.patch"
git -C "$action_dir" apply --unidiff-zero "$GITHUB_ACTION_PATH/runtime.patch"
cp "$GITHUB_ACTION_PATH/pinned-cli.json" "$GITHUB_ACTION_PATH/install_pinned_cli.py" "$action_dir/internal/cli/"
printf '.git\n' > "$action_dir/.dockerignore"
