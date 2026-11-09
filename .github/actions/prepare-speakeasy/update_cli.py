import argparse
import hashlib
import json
from pathlib import Path
import re
import tempfile

from install_pinned_cli import download, install, verified_executable

PIN_PATH = Path(__file__).with_name("pinned-cli.json")
ASSET = "speakeasy_linux_amd64.zip"


def artifact_url(version):
    if not re.fullmatch(r"[0-9]+\.[0-9]+\.[0-9]+", version):
        raise ValueError("Specify an exact X.Y.Z release version without a v prefix")
    return f"https://github.com/speakeasy-api/speakeasy/releases/download/v{version}/{ASSET}"


def updated_pin(version):
    url = artifact_url(version)
    checksum_url = url.rsplit("/", 1)[0] + "/checksums.txt"
    entries = [line.split() for line in download(checksum_url).decode().splitlines()]
    matches = [entry for entry in entries if entry and entry[-1].removeprefix("*") == ASSET]
    if (
        len(matches) != 1
        or len(matches[0]) != 2
        or not re.fullmatch(r"[0-9a-fA-F]{64}", matches[0][0])
    ):
        raise ValueError(f"Expected exactly one SHA-256 checksum for {ASSET}")
    archive_sha256 = matches[0][0].lower()
    binary = verified_executable(download(url), archive_sha256)
    return {
        "version": version,
        "platform": "linux_amd64",
        "artifact_url": url,
        "archive_sha256": archive_sha256,
        "binary_sha256": hashlib.sha256(binary).hexdigest(),
    }


def check_pin(pin):
    if pin["platform"] != "linux_amd64" or pin["artifact_url"] != artifact_url(pin["version"]):
        raise ValueError("CLI pin must name its versioned Linux amd64 release artifact")
    with tempfile.TemporaryDirectory() as directory:
        install(download(pin["artifact_url"]), pin, Path(directory) / "speakeasy")


def main(argv=None):
    parser = argparse.ArgumentParser(description="Update or verify the reviewed Speakeasy CLI pin")
    parser.add_argument("version", nargs="?", help="Exact X.Y.Z release version")
    parser.add_argument("--check", action="store_true", help="Verify the committed pin without changing it")
    args = parser.parse_args(argv)
    if args.check:
        if args.version:
            parser.error("Use either a version or --check")
        pin = json.loads(PIN_PATH.read_text())
        check_pin(pin)
        print(f"Verified CLI {pin['version']} archive and executable checksums")
    else:
        if args.version is None:
            parser.error("An exact version is required")
        pin = updated_pin(args.version)
        PIN_PATH.write_text(json.dumps(pin, indent=2) + "\n")
        print(f"Updated {PIN_PATH.name} to CLI {pin['version']}; review the pin before committing")


if __name__ == "__main__":
    main()
