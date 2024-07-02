import { withThemeByDataAttribute } from "@storybook/addon-styling";
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/blocks";
import type { Preview } from "@storybook/react";
import React from "react";

import "../src/components/assets/styles/index.scss";
import "../src/components/assets/styles/theme.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <>
          <style>
            {`
              .docs-story {
                background-color: rgb(var(--background));
              }
            `}
          </style>

          <Title />
          <Subtitle />

          <Description />

          <Primary />
          <Controls />

          <Stories />
        </>
      ),
    },
  },

  tags: ["autodocs"],
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
