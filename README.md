# Astro Theme Yi

[[English]](./README.md) | [[简体中文]](./README-ZH-CN.md)

Demo：[Astro-Theme-Yi](https://astro-yi-nu.vercel.app/)

A content-focused Astro blog theme, Yi, in Chinese, it means fast and concise.

![](https://pic-19d9.obs.cn-east-3.myhuaweicloud.com/astroyi/home.png)

![](https://pic-19d9.obs.cn-east-3.myhuaweicloud.com/astroyi/post-white.png)

### 🔥 Features

- [x] Supports multi-platform display.
- [x] Supports dark mode.
- [x] support i18n
- [x] Supports search functionality.
- [x] SEO-friendly
- [x] Supports sitemap and RSS.
- [x] Supports article drafts.
- [x] Supports Waline Comment.
- [x] Image lazy loading and scaling support.
- [x] Supports fixed permalinks for articles.

......

### Vercel Deplyment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https%3A%2F%2Fgithub.com%2Fcirry%2Fastro-yi)

Give it a try! Click the button above, and you can deploy with just one click.

### 👨🏻‍💻 Manual Installation

Recommended for use `nodejs >= 18`，`pnpm >= 8`。

```bash
git clone https://github.com/cirry/astro-yi.git
cd astro-yi
npm install -g pnpm # install pnpm
pnpm i  # installs dependencies
npm run dev # preview, starts local dev server at localhost:4321
```

```bash
npm run build # build your production site to ./dist 
```
After the packaging is completed, Upload the `dist` folder to the web server directory.

## Configuration

In the `src/const.ts` file, you can make some modifications according to your needs.

```ts
/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 */
export const site = {
    title: 'Astro Theme Yi',
    favicon: '/favicon.svg',
    description: 'Welcome to my independent blog website! ',
    author: "xxxxx",
    avatar: '/avatar.png',
    motto: 'Keep moving.',
    url: 'https://astro-yi-nu.vercel.app',
    recentBlogSize: 5,
    archivePageSize: 25,
    postPageSize: 10,
    feedPageSize: 20,
    beian: ''
  }

/**
 * busuanzi {boolean} Enable Busuanzi Statistics Functionality
 * lang {string} Default website language: English
 * codeFoldingStartLines {number}
 */
export const config = {
  busuanzi: false,
  lang: 'en', // English: en | 简体中文: zh-cn | 繁體中文: zh-Hant
  codeFoldingStartLines: 16, // Need to re-run the project to take effect
}

/**
 * Navigator
 */
export const categories = [
  {
    name: "Homepage",
    iconClass: "ri-home-4-line",
    href: "/",
  },
  {
    name: "Blog",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  {
    name: "Feed",
    iconClass: "ri-lightbulb-flash-line",
    href: "/feed/1",
  },
  {
    name: "Archive",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },
  {
    name: "Message",
    iconClass: "ri-chat-1-line",
    href: "/message/",
  },
  {
    name: "Search",
    iconClass: "ri-search-line",
    href: "/search",
  },
  {
    name: "More",
    iconClass: "ri-more-fill",
    href: "javascript:void(0);",
    children: [
      {
        name: 'About',
        iconClass: 'ri-information-line',
        href: '/about',
      },
      {
        name: 'Friends',
        iconClass: 'ri-user-5-line',
        href: '/friends',
        target: '_self', // _self | _blank
      },
    ]
  }
]

/**
 * Personal link address
 */
export const infoLinks = [
  {
    icon: 'ri-telegram-fill',
    name: 'telegram',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-twitter-fill',
    name: 'twitter',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-instagram-fill',
    name: 'instagram',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'https://github.com/cirry',
  },
  {
    icon: 'ri-mail-fill',
    name: 'xxxxxxx@gmail.com',
    outlink: 'mailto:xxxxxxx@gmail.com',
  },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: 'https://xxxxx.com/rss.xml',
  }
]

/**
 * Donation feature
 * Please replace the image and paypal link before use.
 * enable {boolean}
 * tip {string}
 */
export const donate = {
  enable: false,
  tip: "Thanks for the coffee !!!☕",
  wechatQRCode: "/WeChatQR.png",
  alipayQRCode: "/AliPayQR.png",
  paypalUrl: "https://paypal.me/xxxxxxxx",
}

/**
 * Friends Links Page
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    {
      name: "Cirry's Blog",
      url: 'https://cirry.cn',
      avatar: "https://cirry.cn/avatar.png",
      description: 'frontend development'
    },
  ]

/**
 * Comment Feature
 * enable {boolean}
 * type {string} giscus and waline are currently supported.
 * walineConfig.serverUrl {string} server link
 * walineConfig.pageSize {number} number of comments per page. default 10
 * walineConfig.wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * walineConfig.count {number} recent comment numbers
 * walineConfig.pageview {boolean} display the number of page views and comments of the article
 * walineConfig.reaction {string | string[]} Add emoji interaction function to the article
 * walineConfig.requiredMeta {string[]}  Set required fields, default anonymous
 */
export const comment = {
  enable: false,
  type: 'giscus', // waline | giscus,
  walineConfig:{
    serverUrl: "https://xxxxx.xxxxx.app",
    lang: 'en',
    pageSize: 20,
    wordLimit: '',
    count: 5,
    pageview: true,
    reaction: true,
    requiredMeta: ["nick", "mail"],
    whiteList: ['/message/', '/friends/'],
  },

  // giscus config
  giscusConfig: {
    'data-repo': "xxxxxxx",
    'data-repo-id': "xxxxxx",
    'data-category': "Announcements",
    'data-category-id': "xxxxxxxxx",
    'data-mapping': "pathname",
    'data-strict': "0",
    'data-reactions-enabled': "1",
    'data-emit-metadata': "0",
    'data-input-position': "bottom",
    'data-theme': "light",
    'data-lang': "xxxxxxxxxxx",
    'crossorigin': "anonymous",
  }
}
```

Please modify your website configuration, comment system configuration, appreciation function image, personal information links, and of course, you can also modify other configuration content.

### Write a blog 

With the Yi theme, all you need to do is create a new md document in `src/content/blog` and you're ready to start writing your blog.

According to Astro's Markdown document standard, each document should have its own frontmatter information and add `---` as the beginning and the end of the document's header in md to mark the frontmatter, which gives us a lot of convenience:.

1. for example, if we want to add tags and categories to a document or top some documents, we can add some attributes to the document in Frontmatter, such as `tags`, `sticky` and so on.

2. For example, to avoid using Chinese as the blog path and file name, we can set `title` as the title of the md document in Chinese, and the file name in English with `-` as the word connecting symbol.

In Astro-Yi, You need to set two important properties: **title** and **date**, the following is the simplest frontmatter setup for a Md document:

```yaml
---
title: Display pictures
date: 2024-03-05
---
```

If you feel that this is not quite enough, Yi also provides more properties for you to use, this is a complete example:

```yaml
---
title: Display pictures
description: Display pictures
date: 2024-03-05
tags: [astro]
category: astro
sticky: 100  // Document top weight, the larger the number, the greater the weight
slug: poem/ci //  Permanent link to document
mathjax: false // enable formula display
mermaid: false // enable mermaid
draft: false
toc: true
donate: false
comment: false
---
```

### Write a feed

With the Yi theme, all you need to do is create a new md document in `src/content/feed` and you're ready to start writing.

feed frontmatter needs to set an important property **date**, the rest of the attributes are optional.

```yaml
---
date: 2024-03-20
---
```

### Modify icons

All the icons in the blog are using the open source icon library [remixicon](https://remixicon.cn/), you can replace your favorite icons by yourself.

### Note

In the `astro.config.mjs` file in the root directory, it is recommended to modify the `site` property to correctly generate the site map.

```js
export default defineConfig({
  site: 'https://xxxx.com',// Modify to your own website address
  // ...
})
```

Add a line to the path of your sitemap file at the end of the robots.txt file in the public directory.


```text
Sitemap: [blog-url]/sitemap-0.xml
// ps：Sitemap: https://astro-yi-nu.vercel.app/sitemap-0.xml
```
