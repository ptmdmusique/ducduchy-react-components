// import "@storybook/addon-console";

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

import React from "react";
window.React = React;
