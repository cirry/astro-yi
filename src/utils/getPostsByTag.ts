import _ from 'lodash'
import { dealLabel } from './dealLabel';

const getPostsByTag = (posts, tag: string) =>
    posts.filter(post => _.flattenDeep(dealLabel(post.data.tags)).includes(tag))
export default getPostsByTag;