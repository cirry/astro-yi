---
title: Astro-Yi主题配置和写作技巧
date: 2023-03-24 17:21:27
tags: 
  - astro
category: 
  - astro
sticky: 100
description: 简单的介绍一下Astro-Yi主题的一些基础配置和Markdown文件写作技巧。
---

## 介绍

这是我开发的Astro开源博客主题，名字叫[Astro-Yi](https://github.com/cirry/astro-yi)，喜欢的可以点个star啦，感谢关注，欢迎PR！

## 配置Astro-Yi

### 必不可少的配置（必须）

Astro项目的配置文件在`/astro.config.mjs`，其中有一些配置是必不可少的：

```js
export default defineConfig({
    site: "https://cirry.cn", // 请在这里修改为自己的网站地址
})
```

在Astro-Yi主题的配置文件`src/config.ts`，其中有一些配置是很重要的：

### 博客信息配置

```ts
export const site = {
  title: "Cirry's Blog",  // required
  author: "Cirry", // required
  description: '', 
  motto: '', 
  url: 'https://cirry.cn', // required
  recentBlogSize: 5, // required
  archivePageSize: 25, // required
  postPageSize: 10, // required
  indexPageSize: 10, // required
  beian: '', 
}
```

### 评论系统配置

```js
/**
 * enable 是否开启评论功能 true启用，false关闭
 * waline 的服务端地址
 * pageSize： The desired number of comments shown in each page.
 * wordLimit: 评论字数限制。填入单个数字时为最大字数限制。设置为 0/或不设置时无限制
 * requiredMeta： 评论必填项，可以是nick，mail，link中的一个或多个
 * count: 侧边栏查询最近评论数
 * pageview: 文章浏览量统计
 * reaction: 文章增加表情互动功能
 */
export const comment = {
  enable: true, // 必填，设置为开启评论系统
  serverUrl: "https://xxx.xx.app", // 必填，修改为您的Waline服务端地址
  pageSize: 20, //
  wordLimit: '', 
  requiredMeta: ["nick", "mail"], // 必填
  count: 5,
  pageview: true,
  reaction: false,
}

```

### 赞助系统配置

```js
/**
 * 赞助系统
 * enable: true 开启, false 关闭
 * tip: 赞助提示
 * wechatQRCode: 微信二维码地址，图片地址应放在public目录下
 * alipayQRCode: 支付宝二维码地址，图片地址应放在public目录下
 * paypalUrl: Paypal二维码地址
 * @type {{paypalUrl: string, alipayQRCode: string, enable: boolean, wechatQRCode: string, tip: string}}
 */
export const donate = {
  enable: true,
  tip: "感谢大佬送来的咖啡☕",
  wechatQRCode: "/WeChatQR.png",
  alipayQRCode: "/AliPayQR.png", 
  paypalUrl: "https://paypal.me/cirry0?country.x=C2&locale.x=zh_XC",
}
```

### 友情链接配置

```js
/**
 * 友情链接
 * name: 博客名称
 * url: 博客地址
 * avatar: 博客头像
 * descript: 博客描述
 * @type {[{name: string, description: string, avatar: string, url: string}]}
 */
export const friendlyLinks = [
    {
      name: "Cirry's Blog",
      url: 'https://cirry.cn',
      avatar: "https://cirry.cn/avatar.png",
      description: '前端开发的日常'
    },
]

```

### 建议的配置

Astro-yi中有很多配置可以丰富我们的页面功能，我有以下建议：

1. 建议启用Waline评论系统。如果不会安装Waline系统，可以参考[Waline官网](<https://waline.js.org/>)或者[安装waline评论功能](https://cirry.cn/blog/docker/install-wailne/)。

2. 备案号，如果您是中国大陆的使用者，建议添加。

3. 个人链接，让更多的人认识您和您的网站。

## 写作技巧

### Markdown文档规范

如果使用Astro作为博客的话，必不可少的需要使用到Markdown，基础的规范可以参考Github的写作规范[基本撰写和格式语法](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)。
 
### 在Vscode中自动生成frontmatter

写每一篇文章中，如果需要手动去复制信息并填写日期的话，也是一件很复杂的事情，所以我提供了一个在使用Vscode编写博客时自动生成frontmatter的方法，具体内容可以参考这里[Vscode添加Markdown-Frontmatter代码片段](https://cirry.cn/blog/frontend/astro/vscode-add-frontmatter-code-snippet/)。

#### 编写博客页面

在Yi的主题下，你只需要在`src/content/blog`中新建一个md文档，就可以开始编写你的博客了。

根据Astro的Markdown文档标准，每个文档都应该有自己的frontmatter信息，并在md中文档的头部添加`---`作为开头和结尾来标记frontmatter，这给我们带来了很多的便利:

1. 比如我们想要给文档添加标签和分类或者置顶某些文档，我们可以在Frontmatter中给文档添加一些属性，比如`tags`, `sticky`等等。

2. 比如为避免使用中文作为博客路径和文件名称，我们可以给md文档单独设置`title`为中文标题，文件名使用英文并用`-`作为单词连接符号。

在Astro-Yi中，您只需要最简单的设置文档标题`title`和创作日期`date`标签，下面就是一个Md文档最简单的frontmatter的设置：

```js
---
title: 菩萨蛮·花明月暗笼轻雾
date: 2024-03-05
---
```

如果您觉得这样的文档属性不太够用，Yi也提供了更多的属性供您使用，这是一个完整的属性配置示例：

```js
---
title: 菩萨蛮·花明月暗笼轻雾 // 文件名称
description: 此词当是李煜描写自己与小周后幽会之情景，创作于北宋乾德二年（公元964年）前后。 // 文档描述
date: "2023-01-25T10:23:31.210Z" // 发布日期
tags:   // 文档标签支持数组和字符串
  - 诗词
category: 诗词  // 文档分类支持数组和字符串
sticky: 100  // 文档置顶权重，数字越大，权重越大
slug: poem/ci // 文档永久链接
mathjax: false // 是否开启公式显示
draft: false    // 是否为草稿
toc: true   // 是否需要文章标题目录
donate: false   // 是否需要开启赞助功能
comment: false  // 是否需要开启评论功能
---
```

以上所有的属性除了`title`，其余都是可选的或者是有默认值的，您可以在`src/content/config.js`中修改他们是否可选或者默认值。

#### 编写动态页面

在Yi的主题下，你只需要在`src/content/feed`中新建一个md文档，就可以开始编写你的动态了。

动态页面应该是类似朋友圈、微博、推特这样，作为一个临时想说或者想吐槽一些什么的地方。

所以没有给它添加过多的frontmatter限制，您甚至不需要设置`title`（当然这样的内容也不需要title），但是我们知道发布一个消息，最重要的属性就是发布时间，**所以需要设置`date`。**

所以动态页面的Md文档的frontmatter的基础设置应该是这样：

```js
---
date: 2023-01-25 10:23:31
---
```

### 加载本地图片

将你的图片文件放在`/public/images`目录下,如果没有`images`文件夹就创建一下 ，然后在Markdown中使用绝对路径`/images/xx.png`引用即可。

比如您有一张图片名为`xxx.png`， 将其移动到`/public/images/2024/`文件夹下，那您只需要在md文件中，这样引入`![](/images/2024/xxx.png)`就可以正常使用了。

### 修改图标

博客中的所有的图标都是使用开源图标库[remixicon](https://remixicon.cn/)，可以自行替换自己喜欢的图标。

### 题外话

Yi主题应该是简单易用的，如果大家有好的建议可以留言或者提Issue。
