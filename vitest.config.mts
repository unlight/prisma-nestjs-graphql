import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    fileParallelism: false,
    hideSkippedTests: true,
    testTimeout: 30000,
    hookTimeout: 30000,
  },
});
