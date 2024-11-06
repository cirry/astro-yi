import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';
import remarkDirective from "remark-directive";
import expressiveCode from "astro-expressive-code";
import {pluginLineNumbers} from '@expressive-code/plugin-line-numbers'
import {pluginCollapsibleSections} from '@expressive-code/plugin-collapsible-sections'

import {remarkModifiedTime,} from "./src/plugins/remark-modified-time.mjs";
import {resetRemark} from "./src/plugins/reset-remark.js";
import {remarkAsides} from  './src/plugins/remark-asides.js'
import {remarkCollapse} from "./src/plugins/remark-collapse.js";
import {remarkGithubCard} from './src/plugins/remark-github-card.js'
import {lazyLoadImage} from "./src/plugins/lazy-load-image.js";


export default defineConfig({
  site: 'https://astro-yi-nu.vercel.app',
  integrations: [sitemap(), tailwind(), solid(), expressiveCode({
    plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
    themes: ["github-dark", "github-light"],
    styleOverrides: {
      codeFontFamily: "jetbrains-mono",
      uiFontFamily: "jetbrains-mono",
    },
    themeCssSelector: (theme) => `[data-theme="${theme.type}"]`
  }), mdx()],
  markdown: {
    remarkPlugins: [remarkModifiedTime, resetRemark, remarkDirective, remarkAsides({}),remarkCollapse({}),remarkGithubCard()],
    rehypePlugins: [lazyLoadImage],
  }
});
