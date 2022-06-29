// / <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 10000,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
