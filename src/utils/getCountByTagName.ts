import _ from 'lodash'
import { dealLabel } from './dealLabel'

const getCountByTagName = (posts) => {
    let tags: string[] = [];
    const filteredPosts = posts.filter(({ data }) => !data.draft);
    filteredPosts.forEach(post => {
        tags = _.compact([...tags, ..._.flattenDeep(dealLabel(post.data.tags))])
    });
    return _.countBy(tags);
};

export default getCountByTagName;
