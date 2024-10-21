# Astro Theme YI

[[English]](./README.md) | [[简体中文]](./README-ZH-CN.md)

预览地址：[Astro-Theme-Yi](https://astro-yi-nu.vercel.app/)

更多配置内容，请参阅文章： [Astro-YI Write Skill](https://cirry.cn/blog/frontend/astro/config-and-write-skill)

一款以内容为主的Astro博客主题————Yi，快速和简洁。

![](https://pic-19d9.obs.cn-east-3.myhuaweicloud.com/astroyi/home.png)

![](https://pic-19d9.obs.cn-east-3.myhuaweicloud.com/astroyi/post-white.png)

### 🔥 特色功能

- [x] 支持多端显示
- [x] 支持暗黑显示
- [x] 支持国际化
- [x] 支持搜索功能
- [x] 友好的SEO
- [x] 支持站点地图和rss
- [x] 支持草稿箱
- [x] 支持waline评论系统
- [x] 支持图片懒加载和预览
- [x] 支持文章永久固定链接

......等等

### Vercel一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https%3A%2F%2Fgithub.com%2Fcirry%2Fastro-yi)

试试吧，点击上面的按钮，就可以一键部署了。

### 👨🏻‍💻 手动部署

推荐使用：`nodejs >= 18`，`pnpm >= 8`。

```bash
git clone https://github.com/cirry/astro-yi.git
cd astro-yi
npm install -g pnpm
pnpm i 
npm run dev # preview
```

将您最喜欢的文章写在 `src/content/blog` 文件夹中，在 `src/content/feed` 文件夹中编写您想发布的动态内容。

```bash
npm run build # build
```

打包完成后，在根目录中会生成一个 dist 文件夹。将 'dist' 文件夹上传到 Web 服务器目录中，即可完成部署。

## 配置

在 src/const.ts 文件中，您可以根据自己的需求进行一些修改。

```ts
/**
 * Site information
 * title：网站标题
 * description：网站描述
 * author：作者
 * motto：格言
 * url：网站地址
 * recentBlogSize：最近文章数量
 * archivePageSize：归档页面每页显示的数量
 * postPageSize：文章页面每页显示的数量
 * feedPageSize：动态页面每页显示数量
 * beian：备案号
 */
export const site = {
    title: 'Astro Theme Yi',
    favicon: '/favicon.svg',
    description: 'Welcome to my independent blog website! ',
    author: "Cirry",
    avatar: '/avatar.png',
    motto: '最重要的事情只有一件',
    url: 'https://astro-yi-nu.vercel.app',
    recentBlogSize: 5,
    archivePageSize: 25,
    postPageSize: 10,
    feedPageSize: 20,
    beian: ''
  }

/**
 * busuanzi：是否开启不蒜子统计功能
 */
export const config = {
  busuanzi: false,
}

/**
 * 导航栏
 */
export const categories = [
  {
    name: "首页",
    iconClass: "ri-home-4-line",
    href: "/",
  },
  {
    name: "博客",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  {
    name: "动态",
    iconClass: "ri-lightbulb-flash-line",
    href: "/feed/1",
  },
  {
    name: "归档",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },
  {
    name: "留言",
    iconClass: "ri-chat-1-line",
    href: "/message",
  },
  {
    name: "搜索",
    iconClass: "ri-search-line",
    href: "/search",
  },
  {
    name: "更多",
    iconClass: "ri-more-fill",
    href: "javascript:void(0);",
    children: [
      {
        name: '关于本站',
        iconClass: 'ri-information-line',
        href: '/about',
      },
      {
        name: '友情链接',
        iconClass: 'ri-user-5-line',
        href: '/friends',
      },
    ]
  }
]

/**
 * 个人链接地址
 */
export const infoLinks = [
  {
    icon: "ri-bilibili-fill",
    name: "bilibili",
    outlink: "https://space.bilibili.com/xxxxxxxx",
  },
  {
    icon: 'ri-mail-fill',
    name: 'xxxxxxx@gmail.com',
    outlink: 'mailto:xxxxxxx@gmail.com',
  },
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'https://github.com/cirry',
  },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: 'https://xxxxx.com/rss.xml',
  }
]

/**
 * 赞赏功能
 * 请在使用之前更换图像和 PayPal 链接。
 * enable {boolean}
 * tip {string}
 */
export const donate = {
  enable: false,
  tip: "感谢大佬送来的咖啡☕",
  wechatQRCode: "/WeChatQR.png",
  alipayQRCode: "/AliPayQR.png",
  paypalUrl: "https://paypal.me/cirry0?country.x=C2&locale.x=zh_XC",
}

/**
 * 友情链接配置
 */
export const friendshipLinks =
  [
    {
      name: "Cirry's Blog",
      url: 'https://cirry.cn',
      avatar: "https://cirry.cn/avatar.png",
      description: '前端开发的日常'
    },
  ]

/**
 * 评论功能
 * enable 是否开启评论功能
 * type 目前支持waline和giscus评论系统
 * walineConfig.serverUrl 评论服务器地址
 * walineConfig.pageSize 每页评论数量
 * walineConfig.wordLimit 评论内容字数限制，默认为空不限制
 * walineConfig.count 最近评论侧边栏评论数量
 * walineConfig.pageview 是否开启阅读数统计
 * walineConfig.reaction 是否开启表情
 * walineConfig.requiredMeta 必填字段
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


请修改您的网站配置、评论系统配置、赞赏功能图片、个人信息链接，当然，您也可以修改其他配置内容。

### 备注

在根目录中的 astro.config.mjs 文件中，建议修改 site 属性以正确生成网站地图。

```js
export default defineConfig({
  site: 'https://xxxx.com',// 修改为您自己的网站地址
   // ...
})
```

在public目录中的robots.txt文件最后添加一行您的sitemap文件路径。

```text
Sitemap: [博客地址]/sitemap-0.xml
// 类似：Sitemap: https://astro-yi-nu.vercel.app/sitemap-0.xml
```