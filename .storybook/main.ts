import type { StorybookConfig } from '@storybook/web-components-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.ts"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/web-components-vite",
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
    }),
};
export default config;
