import hashlib
import io
import json
from pathlib import Path
import platform
import urllib.request
import zipfile


def download(url):
    with urllib.request.urlopen(url, timeout=60) as response:
        return response.read()


def verified_executable(archive, archive_sha256):
    if hashlib.sha256(archive).hexdigest() != archive_sha256:
        raise ValueError("Speakeasy CLI archive checksum mismatch")
    with zipfile.ZipFile(io.BytesIO(archive)) as package:
        return package.read("speakeasy")


def install(archive, pin, destination):
    binary = verified_executable(archive, pin["archive_sha256"])
    if hashlib.sha256(binary).hexdigest() != pin["binary_sha256"]:
        raise ValueError("Speakeasy CLI executable checksum mismatch")
    destination.write_bytes(binary)
    destination.chmod(0o755)


if __name__ == "__main__":
    pin = json.loads(Path(__file__).with_name("pinned-cli.json").read_text())
    if platform.system() != "Linux" or platform.machine() != "x86_64" or pin["platform"] != "linux_amd64":
        raise ValueError("The pinned Speakeasy CLI requires Linux amd64")
    install(download(pin["artifact_url"]), pin, Path("/bin/speakeasy"))
