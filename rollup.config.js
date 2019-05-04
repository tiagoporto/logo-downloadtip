import createDefaultConfig from '@open-wc/building-rollup/modern-config';
import postcss from 'rollup-plugin-postcss';

const config = createDefaultConfig({ input: './src/index.html' });

config.plugins.push(
  postcss({
    plugins: [],
  }),
);

export default config;
