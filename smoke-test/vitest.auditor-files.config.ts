import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/auditor-files.test.ts", "src/auditor-files-example.test.ts"],
    testTimeout: 30_000,
    fileParallelism: false,
  },
});
