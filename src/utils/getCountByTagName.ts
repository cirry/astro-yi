import {compact, flattenDeep, countBy} from 'lodash-es'
import {dealLabel} from './dealLabel'
import type {CollectionEntry} from "astro:content";

const getCountByTagName = (posts: CollectionEntry<'blog'>[]) => {
  let tags: string[] = [];
  const filteredPosts = posts.filter(({data}) => {
    return import.meta.env.PROD ? !data.draft : true
  });
  filteredPosts.forEach(post => {
    tags = compact([...tags, ...flattenDeep(dealLabel(post.data.tags))])
  });
  return countBy(tags);
};

export default getCountByTagName;
