import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';
import {remarkModifiedTime} from "./src/remarkPlugin/remark-modified-time.mjs";

import expressiveCode from "astro-expressive-code";
import {pluginLineNumbers} from '@expressive-code/plugin-line-numbers'

// https://astro.build/config

export default defineConfig({
  site: 'https://astro-yi-nu.vercel.app',
  integrations: [sitemap(), tailwind(), solid(), expressiveCode({
    plugins: [pluginLineNumbers()],
    themes: ["dracula-soft", "github-light"],
    styleOverrides: {
      codeFontFamily: "jetbrains-mono",
      uiFontFamily: "jetbrains-mono",
    },
    themeCssSelector: (theme) => `[data-theme="${theme.type}"]`
  }), mdx()],
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  }
});
