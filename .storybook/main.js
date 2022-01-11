const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../stories/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/builder-webpack5',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    'storybook-addon-themes',
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss'),
    //       plugins: [
    //         require('postcss-import'),
    //         require('tailwindcss'),
    //         require('autoprefixer'),
    //       ],
    //     },
    //   },
    // },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(sass|scss)$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
