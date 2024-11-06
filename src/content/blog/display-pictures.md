---
title: Pictures display
date: 2024-03-21
description: Showcase your favorite images in more ways than one!
tags: [feature]
category: astro
---

### Display remote links

```md
![](https://astro-yi.obs.cn-east-3.myhuaweicloud.com/avatar.png)
```

![](https://astro-yi.obs.cn-east-3.myhuaweicloud.com/avatar.png)

### Show Local Pictures

```md
![](/avatar.png)
```

![](/avatar.png)

### Customize Local Images

Use html, set`style="width: 200px;"`

```html
<img src="/spinner.gif" data-src="/avatar.png" style="width:200px;">
```

<img src="/spinner.gif" data-src="/avatar.png" style="width:200px;">

### One row, two columns.

```html

<div class="image-cols-2">
  <img src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg">
</div>
```

<div class="image-cols-2">
  <img src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg" >
</div>


For lazy loading: we need to enter `/spinner.gif` in `src`, and the real address of the image in `data-stc`. If you don't want to use this feature, just enter the image's real address in `src`.

### One row, three columns

```html

<div class="image-cols-3">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg">
</div>
```

<div class="image-cols-3">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg" >
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg" >
</div>

### One row, four columns

```html

<div class="image-cols-4">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
</div>
```

<div class="image-cols-4">
  <img class="object-fill" src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img class="object-fill" src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg" >
  <img class="object-fill" src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg" >
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
</div>

### Actually, it's all right.

You can actually display it however you want, you just need to know a little bit about TailwindCss.

```html
<div class="image-cols-2">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
  <img class="row-span-2" src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-jeffer-berrire-9027257.jpg">
  <img src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-kyle-miller-20582700.jpg">
</div>
```

<div class="image-cols-2">
<img src="/spinner.gif" class="object-fill" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8536415.jpeg">
<img class="row-span-2 object-fill" src="/spinner.gif" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-8907866.jpeg">
<img src="/spinner.gif" class="object-fill" data-src="https://astro-yi.obs.cn-east-3.myhuaweicloud.com/pexels-photo-20523844.jpeg">
</div>

### Remember

The theme provides three simple style classes that you can use directly.

+ One row and two columns: `class="image-cols-2"`.
+ one row and three columns: `class="image-cols-3"`.
+ one row and four columns: `class="image-cols-4"`.

If you want a more complex display, check out TailwindCss.