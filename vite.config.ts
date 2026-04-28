import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/').at(-1);
const base = process.env.GITHUB_ACTIONS === 'true' && repositoryName ? `/${repositoryName}/` : '/';

export default defineConfig({
  base,
  resolve: {
    alias: {
      '@components': path.resolve(dirname, 'src/components'),
      '@pages': path.resolve(dirname, 'src/pages'),
      '@services': path.resolve(dirname, 'src/services'),
      '~': path.resolve(dirname, 'src'),
    },
  },
});
