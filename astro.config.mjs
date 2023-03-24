import { defineConfig } from 'astro/config';
// 添加yml支持
import yaml from '@rollup/plugin-yaml';
// 新版node需要改写path和dirname
import path from 'path';
// 最新 node 核心包的导入写法
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
// 获取 __filename 的 ESM 写法
const __filename = fileURLToPath(import.meta.url);
// 获取 __dirname 的 ESM 写法
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

import { visit } from 'unist-util-visit'

function myRemarkPluginToLazyLoadImage() {
  return (tree) => {
    visit(tree, (node, index) => {
      if (node.type === 'image') {
        node.alt = node.url
        node.url = ''
      }
    })
  }
}

// https://astro.build/config
export default defineConfig({
  site: "https://demo.demo/",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false,
    },
  }), sitemap(), solidJs()],
  vite: {
    plugins: [yaml()],
    resolve: {
      alias: {
        '$': path.resolve(__dirname, './src')
      }
    }
  },
  markdown: {
    remarkPlugins: [myRemarkPluginToLazyLoadImage],
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula-soft',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: false
    }
  }
});