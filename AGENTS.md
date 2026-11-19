# Repository context

Generated API code follows `.speakeasy/workflow.yaml` and the pinned, verified CLI in `.github/actions/prepare-speakeasy/`.

For auditor-file uploads, read [the requirements, architecture and verification](docs/auditor-files.md) before changing the helper, generated upload operations or tests. Keep `src/auditor-files.ts` separate from generated indexes. Track the change in [PEX-12141](https://vanta.atlassian.net/browse/PEX-12141).

Run build, lint and tests in background sessions. Preserve unrelated formatting and existing API request contracts. Do not publish packages or change PR state without explicit authorization.
