import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/api/**/*.{test,spec}.{js,ts}'],
    environment: 'node',
    globals: true,
    testTimeout: 30000, // API tests might take longer
    retry: process.env.CI ? 2 : 0, // Some endpoints depend on flaky third-party services
    hookTimeout: 10000,
    teardownTimeout: 10000,
    reporters: ['verbose'],
  }
});
