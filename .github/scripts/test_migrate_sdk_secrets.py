import contextlib
import copy
import io
import json
import subprocess
import unittest
from unittest.mock import patch

import migrate_sdk_secrets as migration


def settings(approval):
    rules = []
    if approval:
        rules.append({
            "type": "required_reviewers", "prevent_self_review": True,
            "reviewers": [{"type": "Team", "reviewer": {"slug": migration.REVIEWER_TEAM}}],
        })
    return {
        "deployment_branch_policy": {"custom_branch_policies": True, "protected_branches": False},
        "can_admins_bypass": False,
        "protection_rules": rules,
    }


class FakeGitHub:
    def __init__(self):
        self.settings = {name: settings(name != "sdk-automation") for name in (
            "sdk-automation", "sdk-publish", "sdk-secret-migration",
        )}
        self.branches = {name: [{"name": "main", "type": "branch"}] for name in self.settings}
        self.secrets = {name: {} for name in self.settings}
        self.secrets["sdk-secret-migration"][migration.MIGRATION_TOKEN] = "synthetic-migration-token"
        self.writes = []
        self.reads = []
        self.fail_on_write = None
        self.incomplete_inventory = False
        self.drop_writes = False

    def get(self, endpoint):
        self.reads.append(endpoint)
        root, _, query = endpoint.partition("?")
        prefix = f"repos/{migration.REPOSITORY}/environments/"
        assert root.startswith(prefix)
        name, _, resource = root[len(prefix):].partition("/")
        if not resource:
            return copy.deepcopy(self.settings[name])
        assert query == "per_page=100"
        if resource == "secrets":
            items = [{"name": key} for key in self.secrets[name]]
            field = "secrets"
        else:
            assert resource == "deployment-branch-policies"
            items = self.branches[name]
            field = "branch_policies"
        return {"total_count": len(items) + int(self.incomplete_inventory), field: copy.deepcopy(items)}

    def set_secret(self, environment, name, value):
        if self.fail_on_write == len(self.writes) + 1:
            raise migration.MigrationError("Synthetic write failure")
        self.writes.append((environment, name, value))
        if not self.drop_writes:
            self.secrets[environment][name] = value


class MigrationTests(unittest.TestCase):
    def setUp(self):
        self.environment = {
            "GITHUB_REPOSITORY": migration.REPOSITORY,
            "GITHUB_REF": "refs/heads/main",
            "GITHUB_EVENT_NAME": "workflow_dispatch",
            "GH_TOKEN": "synthetic-migration-token",
            "SOURCE_NPM_TOKEN": "synthetic-npm-value",
            "SOURCE_SPEAKEASY_API_KEY": "synthetic-speakeasy-value",
        }
        self.client = FakeGitHub()
        self.messages = []

    def run_migration(self):
        migration.migrate(self.environment, self.client, self.messages.append)

    def assert_rejected_without_writes(self):
        with self.assertRaises(migration.MigrationError):
            self.run_migration()
        self.assertEqual(self.client.writes, [])

    def test_default_is_validation_only(self):
        self.run_migration()
        self.assertFalse(self.client.writes)
        self.assertIn("Validation only", self.messages[-1])

    def test_copy_preserves_values_and_sources(self):
        self.environment["MIGRATION_MODE"] = "copy"
        self.environment["SOURCE_SPEAKEASY_API_KEY"] = "synthetic\nmultiline\nvalue\n"
        original = dict(self.environment)
        self.run_migration()
        self.assertEqual(self.client.writes, [
            (destination, name, original["SOURCE_" + name]) for destination, name in migration.TARGETS
        ])
        self.assertEqual(self.environment, original)
        for key, value in original.items():
            if key.startswith("SOURCE_") or key == "GH_TOKEN":
                self.assertNotIn(value, "\n".join(self.messages))

    def test_rejects_wrong_execution_context_before_api_access(self):
        for key, value in (
            ("GITHUB_REF", "refs/heads/feature"), ("GITHUB_REF", "refs/tags/main"),
            ("GITHUB_REF", "refs/pull/1/merge"), ("GITHUB_EVENT_NAME", "pull_request"),
            ("GITHUB_REPOSITORY", "other/repository"), ("MIGRATION_MODE", "overwrite"),
        ):
            with self.subTest(key=key, value=value):
                with patch.dict(self.environment, {key: value}):
                    self.assert_rejected_without_writes()
        self.assertEqual(self.client.reads, [])

    def test_missing_sources_and_token_fail_before_any_api_access(self):
        for key in ("SOURCE_NPM_TOKEN", "SOURCE_SPEAKEASY_API_KEY", "GH_TOKEN"):
            for empty in ("", " \n"):
                with self.subTest(key=key, empty=empty), patch.dict(self.environment, {key: empty}):
                    self.assert_rejected_without_writes()
        self.assertEqual(self.client.reads, [])

    def test_rejects_unsafe_branch_rules(self):
        for name in self.client.settings:
            for rules in ([], [{"name": "main", "type": "tag"}],
                          [{"name": "*", "type": "branch"}],
                          [{"name": "main", "type": "branch"}, {"name": "v*", "type": "tag"}]):
                with self.subTest(environment=name, rules=rules), patch.dict(self.client.branches, {name: rules}):
                    self.assert_rejected_without_writes()

    def test_rejects_missing_selected_branch_policy(self):
        for name in self.client.settings:
            with self.subTest(environment=name), patch.dict(self.client.settings[name], {"deployment_branch_policy": None}):
                self.assert_rejected_without_writes()

    def test_rejects_administrator_bypass(self):
        for name in self.client.settings:
            with self.subTest(environment=name), patch.dict(self.client.settings[name], {"can_admins_bypass": True}):
                self.assert_rejected_without_writes()

    def test_rejects_missing_review_and_self_review(self):
        for name in ("sdk-publish", "sdk-secret-migration"):
            with self.subTest(environment=name), patch.dict(self.client.settings[name], {"protection_rules": []}):
                self.assert_rejected_without_writes()
            rule = self.client.settings[name]["protection_rules"][0]
            with patch.dict(rule, {"prevent_self_review": False}):
                self.assert_rejected_without_writes()

    def test_rejects_unexpected_or_additional_reviewers(self):
        for name in ("sdk-publish", "sdk-secret-migration"):
            rule = self.client.settings[name]["protection_rules"][0]
            for reviewers in ([], [{"type": "Team", "reviewer": {"slug": "other-team"}}],
                              rule["reviewers"] + [{"type": "User", "reviewer": {"login": "other"}}]):
                with self.subTest(environment=name, reviewers=reviewers), patch.dict(rule, {"reviewers": reviewers}):
                    self.assert_rejected_without_writes()

    def test_rejects_review_gate_on_automatic_generation(self):
        self.client.settings["sdk-automation"] = settings(True)
        self.assert_rejected_without_writes()

    def test_migration_environment_cannot_shadow_sources(self):
        self.client.secrets["sdk-secret-migration"]["NPM_TOKEN"] = "shadow"
        self.assert_rejected_without_writes()

    def test_checks_all_destinations_before_copying(self):
        self.environment["MIGRATION_MODE"] = "copy"
        self.client.secrets["sdk-publish"]["NPM_TOKEN"] = "existing"
        self.assert_rejected_without_writes()
        self.assertEqual(self.client.secrets["sdk-publish"]["NPM_TOKEN"], "existing")

    def test_fails_closed_on_incomplete_inventory(self):
        self.client.incomplete_inventory = True
        self.assert_rejected_without_writes()

    def test_partial_failure_preserves_sources_and_blocks_blind_retry(self):
        self.environment["MIGRATION_MODE"] = "copy"
        original = dict(self.environment)
        self.client.fail_on_write = 2
        with self.assertRaises(migration.MigrationError):
            self.run_migration()
        self.assertEqual(len(self.client.writes), 1)
        self.assertEqual(self.environment, original)
        self.client.fail_on_write = None
        with self.assertRaises(migration.MigrationError):
            self.run_migration()
        self.assertEqual(len(self.client.writes), 1)

    def test_checks_destination_metadata_after_copy(self):
        self.environment["MIGRATION_MODE"] = "copy"
        self.client.drop_writes = True
        with self.assertRaises(migration.MigrationError):
            self.run_migration()


class GitHubClientTests(unittest.TestCase):
    @patch("migrate_sdk_secrets.subprocess.run")
    def test_secret_uses_stdin_and_child_environment_excludes_sources_and_debug(self, run):
        run.return_value = subprocess.CompletedProcess([], 0, "", "")
        value = "synthetic\nmultiline\n"
        with patch.dict("os.environ", {"SOURCE_NPM_TOKEN": value, "GH_DEBUG": "api"}):
            client = migration.GitHub("synthetic-migration-token")
        client.set_secret("sdk-publish", "NPM_TOKEN", value)
        args, kwargs = run.call_args
        self.assertEqual(args[0], ["gh", "secret", "set", "NPM_TOKEN", "--env", "sdk-publish", "--repo", "github.com/" + migration.REPOSITORY])
        self.assertNotIn(value, str(args))
        self.assertEqual(kwargs["input"], value)
        self.assertNotIn("SOURCE_NPM_TOKEN", kwargs["env"])
        self.assertNotIn("GH_DEBUG", kwargs["env"])
        self.assertTrue(kwargs["capture_output"])

    @patch("migrate_sdk_secrets.subprocess.run")
    def test_command_failure_does_not_surface_command_output(self, run):
        run.return_value = subprocess.CompletedProcess([], 1, "synthetic-sensitive-output", "synthetic-sensitive-error")
        with self.assertRaises(migration.MigrationError) as result:
            migration.GitHub("synthetic-token").set_secret("sdk-publish", "NPM_TOKEN", "synthetic-value")
        self.assertNotIn("synthetic", str(result.exception))

    @patch("migrate_sdk_secrets.subprocess.run")
    def test_timeout_does_not_surface_captured_output(self, run):
        run.side_effect = subprocess.TimeoutExpired(["gh"], 60, output="synthetic-sensitive-output")
        with self.assertRaises(migration.MigrationError) as result:
            migration.GitHub("synthetic-token").get("endpoint")
        self.assertNotIn("synthetic", str(result.exception))

    @patch("migrate_sdk_secrets.migrate", side_effect=RuntimeError("synthetic-secret-value"))
    def test_unexpected_failure_does_not_dump_exception(self, _migrate):
        output = io.StringIO()
        with contextlib.redirect_stdout(output):
            result = migration.main()
        self.assertEqual(result, 1)
        self.assertNotIn("synthetic-secret-value", output.getvalue())


if __name__ == "__main__":
    unittest.main()
