## Astro Theme YI

Demo地址：[Astro-Theme-Yi](https://astro-yi.cn)

一个以内容展示为主的Astro博客主题，YI也就是易，简简单单的意思。

![](https://pic-19d9.obs.cn-east-3.myhuaweicloud.com/astroyi/home.png)

![](https://pic-19d9.obs.cn-east-3.myhuaweicloud.com/astroyi/post-white.png)

### 🔥 Features

- [x] 支持多端显示
- [x] 支持暗黑模式
- [x] 支持搜索功能
- [x] SEO友好
- [x] 支持sitemap和rss
- [x] 支持文章草稿和分页
- [x] 支持Waline评论系统
- [x] 添加动态页面
- [x] 图片懒加载和缩放
- [x] 支持文章固定链接

......

### 👨🏻‍💻 Running Locally

推荐使用`nodejs >= 18`，`pnpm >= 8`。

如何使用：

```bash
git clone https://github.com/cirry/astro-yi.git
cd astro-yi
pnpm i 
npm run dev # 预览
```

将您喜欢的文章写入`src/content/blog`文件夹下，将想要发的动态写入`src/content/feed`文件夹下。

更多写作技巧内容请查看文章： [Astro-YI Write Skill](https://cirry.cn/blog/frontend/astro/config-and-write-skill)

```bash
npm run build # 打包
```

打包完成后，将在根目录下生成dist文件夹，将dist文件夹上传到网页服务器目录下即可。

## Configuration

在`src/const.ts`文件中，可以根据您的需要进行一些修改。

```ts
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

/**
 * 站点信息
 * title：网站标题
 * description：网站描述
 * author：作者
 * motto：格言
 * url：网站地址
 * recentBlogSize：最近文章数量
 * archivePageSize：归档页面每页显示的数量
 * postPageSize：文章页面每页显示的数量
 * indexPageSize：首页每页显示的数量
 * beian：备案号
 */
export const site = {
  title: 'Astro Theme Yi',
  description: 'You only live once,so what are you waiting for?',
  author: "Cirry",
  motto: '最重要的事情只有一件',
  url: 'https://astro-yi.cn',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  indexPageSize: 10,
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
    outlink: 'https://astro-yi.cn/rss.xml',
  }
]

/**
 * 赞赏功能
 * enable 是否开启功能
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
export const friendlyLinks =
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
 * serverUrl 评论服务器地址
 * pageSize 每页评论数量
 * wordLimit 评论内容字数限制，默认为空不限制
 * count 最近评论侧边栏评论数量
 * pageview 是否开启阅读数统计
 * reaction 是否开启表情
 * requiredMeta 必填字段
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
}

```

请修改自己的网站配置，评论系统配置，赞赏功能图片，个人信息链接，当然也可以修改其他配置内容。

### 额外注意：

在根目录下的`astro.config.mjs`中，建议修改`site`属性用来正确生成站点地图。
```js
export default defineConfig({
  site: 'https://astro-yi.cn',// 修改为您自己的网站地址
   // ...
})
```
