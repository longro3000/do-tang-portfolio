// ABOUTME: Vite configuration for the Do Tang portfolio with React and Vitest test setup.
// ABOUTME: Configures jsdom test environment and global test utilities.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.js',
  },
});
