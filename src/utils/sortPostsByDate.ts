import dayjs from 'dayjs'
import type {CollectionEntry} from "astro:content";

export const sortPostsByDate = (posts: CollectionEntry<'blog'>[]) =>
  posts
    .filter(({data}) => {
      return import.meta.env.PROD ? !data.draft : true
    })
    .sort((a, b) => dayjs(b.data.date).unix() - dayjs(a.data.date).unix());
