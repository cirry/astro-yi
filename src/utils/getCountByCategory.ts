import _ from 'lodash'
import { dealLabel } from './dealLabel'

const getCountByCategory = (posts) => {
    let category: string[] = [];
    const filteredPosts = posts.filter(({ data }) => !data.draft);
    filteredPosts.forEach(post => {
        category = _.compact([...category, ..._.flattenDeep(dealLabel(post.data.category))])
    });
    return _.countBy(category);
};

export default getCountByCategory;