import {flattenDeep} from 'lodash-es'
import {dealLabel} from './dealLabel';

const getPostsByCategory = (posts, category: string) =>
  posts.filter(post => flattenDeep(dealLabel(post.data.category)).includes(category))

export default getPostsByCategory;
