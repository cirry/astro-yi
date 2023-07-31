import rss from '@astrojs/rss';
import { site as SITE } from "../config.yml";
import { getCollectionByName } from 'src/utils/getCollectionByName';
import { sortPostsByDate } from "src/utils/sortPostsByDate";
let allPosts = await getCollectionByName('blog')
let sortedPosts = sortPostsByDate(allPosts)

export const get = () => rss({
  // `<title>` field in output xml
  title: `${SITE.title}`,
  // `<description>` field in output xml
  description: SITE.description,
  // base URL for RSS <item> links
  // SITE will use "site" from your project's astro.config.
  site: import.meta.env.SITE,
  // list of `<item>`s in output xml
  // simple example: generate items for every md file in /src/pages
  // see "Generating items" section for required frontmatter and advanced use cases
  items: sortedPosts.map(item => ({
    title: item.data.title,
    description: item.data.description,
    link: item.url,
    pubDate: item.data.date,
  })),
  // (optional) inject custom xml
  customData: `<language>en-us</language>`,
});
