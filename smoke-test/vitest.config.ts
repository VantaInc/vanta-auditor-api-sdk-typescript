import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
    testTimeout: 30_000,
    // Live calls to api.vanta.com — keep file-level parallelism off so we
    // don't pound the demo tenant from multiple workers simultaneously.
    fileParallelism: false,
  },
});
