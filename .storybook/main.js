const path = require("path");
const webpack = require("webpack");
module.exports = {
  stories: [
    "../stories/**/*.stories.@(ts|tsx|js|jsx)",
    "../src/**/*.stories.@(ts|tsx|js|jsx)",
  ],
  addons: [
    "@storybook/builder-webpack5",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "storybook-addon-themes",
    "storybook-addon-jsx",
    "@storybook/addon-mdx-gfm",
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },

  webpackFinal: async (config) => {
    // To finally fix issue with scss syntax "Unknown word"
    // https://github.com/storybookjs/presets/issues/131#issuecomment-932282725
    const cssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".css"),
    );
    const sassRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".scss"),
    );
    const sassLoaderIndex = sassRule.use.findIndex(
      ({ loader }) => loader && loader.includes("sass-loader"),
    );
    const postCSSLoader = cssRule.use.find(
      ({ loader }) => loader && loader.includes("postcss-loader"),
    );
    sassRule.use.splice(sassLoaderIndex, 0, postCSSLoader);

    config.externals = ["react-dom"];
    return {
      ...config,
      // https://github.com/storybookjs/storybook/issues/18276#issuecomment-1137101774
      plugins: [
        ...config.plugins.filter(
          (plugin) => plugin.constructor.name !== "IgnorePlugin",
        ),
        new webpack.IgnorePlugin({
          resourceRegExp: /react-dom\/client$/,
          contextRegExp:
            /(app\/react|app\\react|@storybook\/react|@storybook\\react)/,
        }),
      ],
    };
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
