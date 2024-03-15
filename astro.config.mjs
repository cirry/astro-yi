import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solid from '@astrojs/solid-js';
import {remarkModifiedTime} from "./src/remarkPlugin/remark-modified-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-yi-nu.vercel.app',
  integrations: [mdx(), sitemap(), tailwind(), solid()],

  markdown: {
    // remarkPlugins: [remarkReadingTime],
    remarkPlugins: [remarkModifiedTime],
    shikiConfig: {
      theme: 'dracula-soft',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: false
    }
  },
});
