import contextlib
import hashlib
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import call, patch
import zipfile

import install_pinned_cli as installer
import update_cli


class CLIPinTests(unittest.TestCase):
    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.root = Path(directory.name)
        self.destination = self.root / "speakeasy"
        self.pin_path = self.root / "pinned-cli.json"
        self.binary = b"verified executable fixture"
        archive = io.BytesIO()
        with zipfile.ZipFile(archive, "w") as package:
            package.writestr("speakeasy", self.binary)
        self.archive = archive.getvalue()
        self.pin = {
            "version": "2.3.4",
            "platform": "linux_amd64",
            "artifact_url": "https://github.com/speakeasy-api/speakeasy/releases/download/v2.3.4/speakeasy_linux_amd64.zip",
            "archive_sha256": hashlib.sha256(self.archive).hexdigest(),
            "binary_sha256": hashlib.sha256(self.binary).hexdigest(),
        }
        self.manifest = f"{self.pin['archive_sha256']}  {update_cli.ASSET}\n".encode()

    def invoke(self, args, responses):
        with (
            patch.object(update_cli, "PIN_PATH", self.pin_path),
            patch.object(update_cli, "download", side_effect=responses) as fetch,
            contextlib.redirect_stdout(io.StringIO()),
        ):
            update_cli.main(args)
        return fetch

    def test_archive_checked_before_opening(self):
        pin = self.pin | {"archive_sha256": "0" * 64}
        with patch.object(installer.zipfile, "ZipFile") as extract:
            with self.assertRaisesRegex(ValueError, "archive checksum"):
                installer.install(self.archive, pin, self.destination)
            extract.assert_not_called()
        self.assertFalse(self.destination.exists())

    def test_binary_checked_before_writing(self):
        pin = self.pin | {"binary_sha256": "0" * 64}
        with self.assertRaisesRegex(ValueError, "executable checksum"):
            installer.install(self.archive, pin, self.destination)
        self.assertFalse(self.destination.exists())

    def test_installs_verified_binary(self):
        installer.install(self.archive, self.pin, self.destination)
        self.assertEqual(self.destination.read_bytes(), self.binary)
        self.assertTrue(self.destination.stat().st_mode & 0o111)

    def test_update_writes_only_pin_record(self):
        fetch = self.invoke(["2.3.4"], [self.manifest, self.archive])
        self.assertEqual(fetch.call_args_list, [
            call("https://github.com/speakeasy-api/speakeasy/releases/download/v2.3.4/checksums.txt"),
            call(self.pin["artifact_url"]),
        ])
        self.assertEqual(json.loads(self.pin_path.read_text()), self.pin)
        self.assertEqual(list(self.root.iterdir()), [self.pin_path])

    def test_invalid_checksums_leave_pin_unchanged(self):
        manifests = [
            b"no matching asset\n",
            self.manifest + self.manifest,
            f"not-a-hash  {update_cli.ASSET}\n".encode(),
            self.manifest + f"not-a-hash  {update_cli.ASSET}\n".encode(),
        ]
        for manifest in manifests:
            with self.subTest(manifest=manifest):
                self.pin_path.write_text("previous pin\n")
                with self.assertRaisesRegex(ValueError, "exactly one"):
                    self.invoke(["2.3.4"], [manifest])
                self.assertEqual(self.pin_path.read_text(), "previous pin\n")

    def test_update_checks_archive_before_extraction_or_write(self):
        self.pin_path.write_text("previous pin\n")
        manifest = f"{'0' * 64}  {update_cli.ASSET}\n".encode()
        with patch.object(installer.zipfile, "ZipFile") as extract:
            with self.assertRaisesRegex(ValueError, "archive checksum"):
                self.invoke(["2.3.4"], [manifest, self.archive])
            extract.assert_not_called()
        self.assertEqual(self.pin_path.read_text(), "previous pin\n")

    def test_check_uses_committed_pin_without_writing(self):
        self.pin_path.write_text(json.dumps(self.pin))
        original = self.pin_path.read_bytes()
        fetch = self.invoke(["--check"], [self.archive])
        fetch.assert_called_once_with(self.pin["artifact_url"])
        self.assertEqual(self.pin_path.read_bytes(), original)

    def test_check_rejects_bad_binary_digest(self):
        self.pin_path.write_text(json.dumps(self.pin | {"binary_sha256": "0" * 64}))
        with self.assertRaisesRegex(ValueError, "executable checksum"):
            self.invoke(["--check"], [self.archive])

    def test_check_rejects_inconsistent_identity(self):
        for change in [
            {"version": "2.3.5"},
            {"platform": "linux_arm64"},
            {"artifact_url": "https://example.com/cli.zip"},
        ]:
            with self.subTest(change=change):
                self.pin_path.write_text(json.dumps(self.pin | change))
                with self.assertRaisesRegex(ValueError, "versioned Linux amd64"):
                    self.invoke(["--check"], [])

    def test_exact_version_required(self):
        for version in ["latest", "1.2", "1.2.3/other"]:
            with self.subTest(version=version):
                with self.assertRaisesRegex(ValueError, "exact X.Y.Z"):
                    self.invoke([version], [])
        self.assertFalse(self.pin_path.exists())

    def test_version_and_check_are_exclusive(self):
        for args in [[], ["2.3.4", "--check"]]:
            with self.subTest(args=args), contextlib.redirect_stderr(io.StringIO()):
                with self.assertRaises(SystemExit) as error:
                    self.invoke(args, [])
                self.assertEqual(error.exception.code, 2)
