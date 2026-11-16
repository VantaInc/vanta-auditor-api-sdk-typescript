"""Temporary TypeScript-only migration. Never delete sources or print secret values."""

import json
import os
import subprocess
import sys


REPOSITORY = "VantaInc/vanta-auditor-api-sdk-typescript"
MIGRATION_ENVIRONMENT = "sdk-secret-migration"
MIGRATION_TOKEN = "MIGRATION_GITHUB_TOKEN"
REVIEWER_TEAM = "grc-partner-enabled-experiences"
TARGETS = (
    ("sdk-automation", "SPEAKEASY_API_KEY"),
    ("sdk-publish", "SPEAKEASY_API_KEY"),
    ("sdk-publish", "NPM_TOKEN"),
)


class MigrationError(Exception):
    """Only messages constructed here, without secret values, may be logged."""


def check_value_preservation(value):
    # gh secret set trims trailing CR/LF from stdin. Reject instead of silently
    # changing a credential; do not include the value in the error.
    if value.endswith(("\r", "\n")):
        raise MigrationError("A source secret ends with CR/LF, which GitHub CLI would remove. Stop and review; no value was logged.")


class GitHub:
    def __init__(self, token):
        # Do not pass source values, debug switches, or other credentials to gh.
        self.environment = {
            "PATH": os.environ.get("PATH", "/usr/bin:/bin"),
            "GH_TOKEN": token,
            "GH_HOST": "github.com",
            "GH_PROMPT_DISABLED": "1",
            "GH_NO_UPDATE_NOTIFIER": "1",
            "GH_NO_EXTENSION_UPDATE_NOTIFIER": "1",
        }

    def run(self, arguments, value=None):
        try:
            result = subprocess.run(
                ["gh", *arguments],
                input=value,
                text=True,
                capture_output=True,
                env=self.environment,
                timeout=60,
            )
        except (OSError, subprocess.TimeoutExpired):
            raise MigrationError("GitHub CLI did not complete; no command output was logged.") from None
        if result.returncode:
            # gh errors/debug output can contain sensitive material; never forward it.
            raise MigrationError("GitHub CLI failed; check token access and setup. No command output was logged.")
        return result.stdout

    def get(self, endpoint):
        try:
            return json.loads(self.run(["api", "--hostname", "github.com", endpoint]))
        except json.JSONDecodeError:
            raise MigrationError("GitHub returned an unreadable response.") from None

    def set_secret(self, environment, name, value):
        check_value_preservation(value)
        # gh encrypts locally using the destination's public key. Values use stdin,
        # never command arguments, shell interpolation, files, or workflow outputs.
        self.run([
            "secret", "set", name, "--env", environment,
            "--repo", "github.com/" + REPOSITORY,
        ], value)


def environment_path(name):
    return f"repos/{REPOSITORY}/environments/{name}"


def complete_list(client, endpoint, field):
    data = client.get(endpoint + "?per_page=100")
    entries = data.get(field)
    if not isinstance(entries, list) or data.get("total_count") != len(entries):
        raise MigrationError("Could not verify the complete GitHub settings inventory; nothing further will be copied.")
    return entries


def secret_names(client, environment):
    entries = complete_list(client, environment_path(environment) + "/secrets", "secrets")
    if any(not isinstance(item.get("name"), str) for item in entries):
        raise MigrationError("GitHub returned an invalid secret inventory.")
    return {item["name"].upper() for item in entries}


def check_protection(client, environment, needs_approval):
    path = environment_path(environment)
    settings = client.get(path)
    policy = settings.get("deployment_branch_policy") or {}
    if policy.get("custom_branch_policies") is not True or policy.get("protected_branches") is not False:
        raise MigrationError(f"{environment} must use selected branch rules.")
    branches = complete_list(client, path + "/deployment-branch-policies", "branch_policies")
    if len(branches) != 1 or branches[0].get("type") != "branch" or branches[0].get("name") != "main":
        raise MigrationError(f"{environment} must allow only branch main, with no tag rules.")
    if settings.get("can_admins_bypass") is not False:
        raise MigrationError(f"{environment} must disable administrator bypass.")
    reviews = [rule for rule in settings.get("protection_rules", []) if rule.get("type") == "required_reviewers"]
    if not needs_approval:
        if reviews:
            raise MigrationError(f"{environment} must allow automatic generation without reviewer approval.")
        return
    if len(reviews) != 1 or reviews[0].get("prevent_self_review") is not True:
        raise MigrationError(f"{environment} must require review and prevent self-review.")
    reviewers = reviews[0].get("reviewers", [])
    if (len(reviewers) != 1 or reviewers[0].get("type") != "Team"
            or reviewers[0].get("reviewer", {}).get("slug") != REVIEWER_TEAM):
        raise MigrationError(f"{environment} must require the agreed PEX team.")


def migrate(environment, client, emit=print):
    if (environment.get("GITHUB_REPOSITORY") != REPOSITORY
            or environment.get("GITHUB_REF") != "refs/heads/main"
            or environment.get("GITHUB_EVENT_NAME") != "workflow_dispatch"):
        raise MigrationError("Migration requires a manual run from main in the TypeScript SDK repository.")
    mode = environment.get("MIGRATION_MODE", "validate")
    if mode not in ("validate", "copy"):
        raise MigrationError("Mode must be validate or copy.")
    if not environment.get("GH_TOKEN", "").strip():
        raise MigrationError("The migration environment needs MIGRATION_GITHUB_TOKEN.")
    sources = {}
    for name in sorted({name for _, name in TARGETS}):
        value = environment.get("SOURCE_" + name, "")
        if not value.strip():
            raise MigrationError(f"Required source {name} is empty; nothing was copied.")
        check_value_preservation(value)
        sources[name] = value

    # Complete every preflight before writing any secret.
    for name, approval in ((MIGRATION_ENVIRONMENT, True), ("sdk-automation", False), ("sdk-publish", True)):
        check_protection(client, name, approval)
    if secret_names(client, MIGRATION_ENVIRONMENT) != {MIGRATION_TOKEN}:
        raise MigrationError("The migration environment must contain only MIGRATION_GITHUB_TOKEN; source secrets must not be shadowed there.")
    for target in ("sdk-automation", "sdk-publish"):
        if secret_names(client, target):
            raise MigrationError(f"{target} already contains secrets. Stop and review; this migration does not overwrite them.")
    emit("Preflight passed: source values are present and all three environments match the required protections.")
    if mode == "validate":
        emit("Validation only: no secrets were written or deleted.")
        return

    for target, name in TARGETS:
        # No other administrator should edit destinations during the copy window;
        # GitHub's create/update endpoint has no atomic create-only operation.
        client.set_secret(target, name, sources[name])
        emit(f"Copied {name} to {target}.")
    for target in ("sdk-automation", "sdk-publish"):
        expected = {name for destination, name in TARGETS if destination == target}
        if secret_names(client, target) != expected:
            raise MigrationError("Post-copy metadata verification failed. Stop and review; source secrets were not deleted.")
    emit("Copy accepted and destination names verified. Source credentials and access grants remain unchanged.")


def main():
    try:
        migrate(os.environ, GitHub(os.environ.get("GH_TOKEN", "")))
    except MigrationError as error:
        print(f"::error::{error}")
        print("If copy mode started writing, some destinations may be populated. Review them before retrying; no automatic rollback or deletion is performed.")
        return 1
    except Exception:
        # Unexpected exceptions must not dump locals, API payloads, or credentials.
        print("::error::Unexpected migration failure; no exception details were logged. Review destination metadata before retrying.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
