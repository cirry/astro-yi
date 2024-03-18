// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

/**
 * 站点信息
 * title：网站标题
 * favicon: 网站图标
 * description：网站描述
 * author：作者
 * avatar：网站头像
 * motto：格言
 * url：网站地址
 * recentBlogSize：最近文章数量
 * archivePageSize：归档页面每页显示的数量
 * postPageSize：文章页面每页显示的数量
 * indexPageSize：首页每页显示的数量
 * feedPageSize：动态分页设置每页显示数量
 * beian：备案号
 */
export const site = {
  title: 'Astro Theme Yi',
  favicon: '/favicon.svg',
  description: 'Welcome to my independent blog website! ',
  author: "Cirry",
  avatar: '/avatar.png',
  motto: 'Actions speak louder than words.',
  url: 'https://astro-yi-nu.vercel.app',
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  indexPageSize: 10,
  beian: ''
}

/**
 * busuanzi {boolean} 是否开启不蒜子统计功能
 * lang {string} Default website language: en
 */
export const config = {
  busuanzi: false,
  lang: 'en',
}

/**
 * 导航栏 nav
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} "_self|_blank" open in current window / open in new window
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
    href: "/message",
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
        target: '_self',
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
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: 'https://astro-yi-nu.vercel.app/rss.xml',
  }
]

/**
 * 赞赏功能
 * enable 是否开启功能
 */
export const donate = {
  enable: false,
  tip: "Thanks for the coffee !!!☕",
  wechatQRCode: "/WeChatQR.png",
  alipayQRCode: "/AliPayQR.png",
  paypalUrl: "https://paypal.me/cirry0?country.x=C2&locale.x=zh_XC",
}

/**
 * 友情链接配置 friendLinks
 */
export const friendlyLinks =
  [
    // {
    //   name: "Cirry's Blog",
    //   url: 'https://cirry.cn',
    //   avatar: "https://cirry.cn/avatar.png",
    //   description: '前端开发的日常'
    // },
  ]

/**
 * 评论功能
 * enable 是否开启评论功能
 * serverUrl 评论服务器地址
 * lang i18n
 * pageSize 每页评论数量
 * wordLimit 评论内容字数限制，默认为空不限制
 * count 最近评论侧边栏评论数量
 * pageview 是否开启阅读数统计
 * reaction 是否开启表情
 * requiredMeta 必填字段
 */
export const comment = {
  enable: false,
  serverUrl: "https://xxxxx.xxxxx.app",
  lang: 'en', // https://waline.js.org/guide/features/i18n.html
  pageSize: 20,
  wordLimit: '',
  count: 5,
  pageview: true,
  reaction: true,
  requiredMeta: ["nick", "mail"],
  whiteList: ['/message/', '/friends/'], // 开启留言也不显示reaction的页面
}
