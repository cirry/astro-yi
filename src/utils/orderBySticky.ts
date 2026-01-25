import {orderBy} from 'lodash-es'
import dayjs from 'dayjs'
import type {CollectionEntry} from "astro:content";

export const orderBySticky = (posts: CollectionEntry<'blog'>[]) => {
  let handlePosts = posts.map(post => {
    (post as any).sticky = post.data.sticky ? post.data.sticky : 0;
    (post as any).dateTimestamp = dayjs(post.data.date).valueOf();

    return post
  })
  return orderBy(handlePosts, ['sticky', 'dateTimestamp'], ['desc', 'desc'])
}
