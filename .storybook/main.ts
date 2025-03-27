import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.@(ts|tsx|js|jsx)",
    "../src/**/*.stories.@(ts|tsx|js|jsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  }
};
export default config;
