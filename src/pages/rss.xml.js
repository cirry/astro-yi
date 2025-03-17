import rss from '@astrojs/rss';
import {site} from "../consts";
import {getCollection} from "astro:content";
import getUrl from "../utils/getUrl.js";

export async function GET(context) {
  const blog = (await getCollection('blog')).filter(({data}) => {
    return import.meta.env.PROD ? !data.draft : true
  });
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
