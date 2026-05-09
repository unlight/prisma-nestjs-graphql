import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    fileParallelism: false,
    hideSkippedTests: true,
    reporters: 'default',
    testTimeout: 60000,
    hookTimeout: 60000,
  },
});
