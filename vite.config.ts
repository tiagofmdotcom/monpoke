import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(dirname, 'src/components'),
      '@pages': path.resolve(dirname, 'src/pages'),
      '@services': path.resolve(dirname, 'src/services'),
      '~': path.resolve(dirname, 'src'),
    },
  },
});
