// tsdx.config.js

const postcss = require("rollup-plugin-postcss");
const sass = require("rollup-plugin-sass");

// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, options) {
    config.plugins = [
      postcss({
        preprocessor: (content, id) =>
          new Promise((resolve, reject) => {
            const result = sass.renderSync({ file: id });
            resolve({ code: result.css.toString() });
          }),
        config: { path: "./postcss.config.js" },
        sourceMap: false,
        extract: true,
        extensions: [".sass", ".css"],
      }),

      ...(config.plugins || []),
    ];

    return config;
  },
};
