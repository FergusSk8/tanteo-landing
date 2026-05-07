/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssr: true,
      static: true,
      prerender: {
        routes: ['/'],
      },
      nitro: {
        preset: 'cloudflare-pages',
        output: {
          dir: 'dist/analog',
          publicDir: 'dist/analog/public'
        }
      },
    }),
    tsconfigPaths(),
    tailwindcss(),
  ],
}));
