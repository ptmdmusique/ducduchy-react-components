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
    {
      name: "@storybook/addon-styling",
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],

  framework: "@storybook/react-vite",
  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
