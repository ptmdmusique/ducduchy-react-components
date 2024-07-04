import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  core: { builder: "@storybook/builder-vite" },

  stories: [
    "../stories/**/*.stories.@(ts|tsx|js|jsx)",
    "../src/**/*.stories.@(ts|tsx|js|jsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],

  framework: "@storybook/react-vite",
  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
