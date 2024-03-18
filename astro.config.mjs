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
    themes: ['dracula-soft',],
    shiki: {
      // You can pass additional plugin options here,
      // e.g. to load custom language grammars:
      langs: [
        // import('./some-exported-grammar.mjs'),
        // JSON.parse(fs.readFileSync('./some-json-grammar.json', 'utf-8'))
      ],
    },
    styleOverrides:{
      codeFontFamily: "jetbrains-mono",
      uiFontFamily: "jetbrains-mono",
    }
    // useThemedScrollbars: false
  }), mdx()],
  markdown: {
    // remarkPlugins: [remarkReadingTime],
    remarkPlugins: [remarkModifiedTime],
    // shikiConfig: {
    //   theme: 'dracula-soft',
    //   // Add custom languages
    //   // Note: Shiki has countless langs built-in, including .astro!
    //   // https://github.com/shikijs/shiki/blob/main/docs/languages.md
    //   langs: [],
    //   // Enable word wrap to prevent horizontal scrolling
    //   wrap: false
    // }
  }
});
