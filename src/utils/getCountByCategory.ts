import {compact, flattenDeep, countBy} from 'lodash-es'
import {dealLabel} from './dealLabel'
import type {CollectionEntry} from "astro:content";

const getCountByCategory = (posts: CollectionEntry<'blog'>[]) => {
  let category: string[] = [];
  const filteredPosts = posts.filter(({data}) => {
    return import.meta.env.PROD ? !data.draft : true
  });
  filteredPosts.forEach(post => {
    category = compact([...category, ...flattenDeep(dealLabel(post.data.category))])
  });
  let result = countBy(category)
  if (result['uncategorized']) {
    let num = result['uncategorized']
    delete result['uncategorized']
    result['uncategorized'] = num
  }
  return result;
};

export default getCountByCategory;
