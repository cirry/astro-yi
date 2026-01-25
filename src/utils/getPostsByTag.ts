import {flattenDeep} from 'lodash-es'
import {dealLabel} from './dealLabel';
import type {CollectionEntry} from "astro:content";

const getPostsByTag = (posts: CollectionEntry<'blog'>[], tag: string) =>
  posts.filter(post => flattenDeep(dealLabel(post.data.tags)).includes(tag))
export default getPostsByTag;
