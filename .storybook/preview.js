import "@storybook/addon-console";
const { addDecorator } = require("@storybook/react");
const { jsxDecorator } = require("storybook-addon-jsx");

addDecorator(jsxDecorator);

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: "^on.*" },
  themes: {
    default: "Light",
    list: [
      { name: "Light", class: "theme-light", color: "#00aced" },
      { name: "Dark", class: "theme-dark", color: "#3b5998" },
    ],
  },
};
