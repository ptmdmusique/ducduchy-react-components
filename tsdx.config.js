// tsdx.config.js

import postcss from 'rollup-plugin-postcss';
import sass from 'rollup-plugin-sass';
import scss from 'rollup-plugin-scss';

export function rollup(config, options) {
  config.plugins.push(
    postcss({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top',
      },
    })
  );

  config.plugins.push(scss());
  config.plugins.push(sass());
  return config;
}
