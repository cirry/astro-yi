import rss from '@astrojs/rss';
import {site} from "../consts";
import getUrl from "../utils/getUrl.js";
import {getCollection} from "astro:content";

export async function GET(context) {
  let blog = (await getCollection('blog')).filter(({data}) => {
    return import.meta.env.PROD ? !data.draft : true
  });
  // 倒叙之后 再取20条
  blog = blog.sort((a, b) => b.data.date - a.data.date)
  blog = blog.slice(0, 20)

  return rss({
    title: site.title,
    description: site.description,
    site: site.url,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description? post.data.description : post.body.substring(0, 140).replace(/#/gi, "") + "...",
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `${getUrl("/blog/")}${post.slug}/`,
    })),
  });
}
