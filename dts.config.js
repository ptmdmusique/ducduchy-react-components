// tsdx.config.js

const postcss = require("rollup-plugin-postcss");
const scss = require("rollup-plugin-scss");

// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins = [
      // Make sure this is on top or it will fail to compile because of postcss
      scss({
        failOnError: true,
        runtime: require("sass"),
      }),

      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css", ".sass", ".scss"],
        minimize: true,
        modules: true,
        use: {
          sass: require("sass"),
        },
        extract: true,
      }),

      ...(config.plugins || []),
    ];

    return config;
  },
};
