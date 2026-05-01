import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    hideSkippedTests: true,
    reporters: 'dot',
    testTimeout: 30000,
    hookTimeout: 30000,
  },
});
