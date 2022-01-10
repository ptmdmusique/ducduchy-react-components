// tsdx.config.js

const postcss = require('rollup-plugin-postcss');
const sass = require('rollup-plugin-sass');
const scss = require('rollup-plugin-scss');

// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins = [
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css', '.sass', '.scss'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),

      scss(),
      sass(),

      ...(config.plugins || []),
    ];

    return config;
  },
};
