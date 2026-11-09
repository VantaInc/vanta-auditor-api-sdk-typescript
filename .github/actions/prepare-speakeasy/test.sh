#!/usr/bin/env bash
set -euo pipefail
patch_dir="$(cd "$(dirname "$0")" && pwd)"
source_dir="$GITHUB_WORKSPACE/.speakeasy/temp/action"
scratch_dir="$(mktemp -d)"
trap 'rm -rf -- "$scratch_dir"' EXIT
mkdir -p "$scratch_dir/good/.speakeasy/temp" "$scratch_dir/bad/.speakeasy/temp" "$scratch_dir/bad-patch"
git clone --quiet --shared "$source_dir" "$scratch_dir/good/.speakeasy/temp/action"
GITHUB_WORKSPACE="$scratch_dir/good" GITHUB_ACTION_PATH="$patch_dir" bash "$patch_dir/prepare.sh"
test -f "$scratch_dir/good/.speakeasy/temp/action/internal/cli/pinned-cli.json"
grep -qx '.git' "$scratch_dir/good/.speakeasy/temp/action/.dockerignore"
git clone --quiet --shared "$source_dir" "$scratch_dir/bad/.speakeasy/temp/action"
printf 'invalid patch\n' > "$scratch_dir/bad-patch/runtime.patch"
if GITHUB_WORKSPACE="$scratch_dir/bad" GITHUB_ACTION_PATH="$scratch_dir/bad-patch" bash "$patch_dir/prepare.sh"; then
  echo "Invalid patch unexpectedly succeeded" >&2
  exit 1
fi
test ! -e "$scratch_dir/bad/.speakeasy/temp/action"
echo "PASS exact-source preparation and failure cleanup"
