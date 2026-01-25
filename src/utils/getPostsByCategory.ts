import {flattenDeep} from 'lodash-es'
import {dealLabel} from './dealLabel';
import type {CollectionEntry} from "astro:content";

const getPostsByCategory = (posts: CollectionEntry<'blog'>[], category: string) =>
  posts.filter(post => flattenDeep(dealLabel(post.data.category)).includes(category))

export default getPostsByCategory;
