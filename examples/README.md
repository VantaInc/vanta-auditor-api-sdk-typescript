# vanta-auditor-api-sdk Examples

This directory contains example scripts demonstrating how to use the vanta-auditor-api-sdk SDK.

For auditor guidance files, see [the complete upload example](uploadInformationRequestAuditorFile.example.mts) and [upload behavior and recovery](../docs/auditor-files.md). The example uses Node 20 or later and a file-backed Blob.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Setup

1. Copy `.env.template` to `.env`:
   ```bash
   cp .env.template .env
   ```

2. Edit `.env` and add your actual credentials (API keys, tokens, etc.)

## Running the Examples

To run an example file from the examples directory:

```bash
npm run build && npx tsx example.ts
```

## Creating new examples

Duplicate an existing example file, they won't be overwritten by the generation process.


