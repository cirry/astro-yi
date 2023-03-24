import _ from 'lodash'
import { dealLabel } from './dealLabel';

const getPostsByCategory = (posts, category: string) =>
    posts.filter(post => _.flattenDeep(dealLabel(post.data.category)).includes(category))

export default getPostsByCategory;