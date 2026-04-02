import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alejandro-sb.github.io',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    assets: '_assets',
  },
});
