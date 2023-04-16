import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

// https://storybook.js.org/recipes/tailwindcss#add-a-theme-switcher-tool
/* snipped for brevity */
export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "theme-light",
      dark: "theme-dark",
    },
    defaultTheme: "light",
    attributeName: "class",
  }),
];
