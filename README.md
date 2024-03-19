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
npm install -g pnpm
pnpm i 
npm run dev # preview
```

Write your articles in the `src/content/blog` folder, and write the dynamic content you want to post in the `src/content/feed` folder.

For more writing tips, please refer to the article： [Astro-YI Write Skill](https://cirry.cn/blog/frontend/astro/config-and-write-skill)

```bash
npm run build # build
```

After the packaging is completed, a `dist` folder will be generated in the root directory. Upload the 'dist' folder to the web server directory to complete the process.

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
 * indexPageSize {number} Number of articles on the homepage
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
  indexPageSize: 10,
  beian: ''
}

/**
 * busuanzi {boolean} Enable Busuanzi Statistics Functionality
 */
export const config = {
  busuanzi: false,
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
 * serverUrl {string} server link
 * pageSize {number} number of comments per page. default 10
 * wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * count {number} recent comment numbers
 * pageview {boolean} display the number of page views and comments of the article
 * reaction {string | string[]} Add emoji interaction function to the article
 * requiredMeta {string[]}  Set required fields, default anonymous
 */
export const comment = {
  enable: false,
  serverUrl: "https://xxxxxxx.com",
  pageSize: 20,
  wordLimit: '',
  count: 5,
  pageview: true,
  reaction: false,
  requiredMeta: ["nick", "mail"],
  whiteList: ['/message/', '/friends/'],
}
```


Please modify your website configuration, comment system configuration, appreciation function image, personal information links, and of course, you can also modify other configuration content.

### Note

In the `astro.config.mjs` file in the root directory, it is recommended to modify the `site` property to correctly generate the site map.

```js
export default defineConfig({
  site: 'https://xxxx.com',// Modify to your own website address
   // ...
})
```
