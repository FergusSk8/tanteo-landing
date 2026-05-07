/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
    tsconfigPaths: true,
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
        inlineDynamicImports: true
      },
    }),
    tailwindcss(),
  ],
  ssr: {
    noExternal: /.*/,
  }
}));
