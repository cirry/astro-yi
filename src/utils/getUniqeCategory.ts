import _ from 'lodash'
import { dealLabel } from './dealLabel';

const getUniqueCategory = (posts) => {
    let category: string[] = [];
    const filteredPosts = posts.filter(({ data }) => !data.draft);
    filteredPosts.forEach(post => {
        category = [...category, ..._.flattenDeep(dealLabel(post.data.category))]
            .filter(
                (value: string, index: number, self: string[]) =>
                    self.indexOf(value) === index
            );
    });
    return _.compact(category);
};

export default getUniqueCategory;