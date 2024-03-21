import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';
import {remarkModifiedTime} from "./src/remarkPlugin/remark-modified-time.mjs";

import expressiveCode from "astro-expressive-code";
import {pluginLineNumbers} from '@expressive-code/plugin-line-numbers'
import {visit} from 'unist-util-visit'

function customRehypeLazyLoadImage() {
  return function (tree) {
    visit(tree, function (node) {
      if (node.tagName === 'img') {
        node.properties['data-src'] = node.properties.src
        node.properties.src = '/spinner.gif'
      }
    })
  }
}

export default defineConfig({
  site: 'https://astro-yi-nu.vercel.app',
  integrations: [sitemap(), tailwind(), solid(), expressiveCode({
    plugins: [pluginLineNumbers()],
    themes: ["github-dark", "github-light"],
    styleOverrides: {
      codeFontFamily: "jetbrains-mono",
      uiFontFamily: "jetbrains-mono",
    },
    themeCssSelector: (theme) => `[data-theme="${theme.type}"]`
  }), mdx()],
  markdown: {
    remarkPlugins: [remarkModifiedTime],
    rehypePlugins: [customRehypeLazyLoadImage],
  }
});
