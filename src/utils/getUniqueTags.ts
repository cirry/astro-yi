import _ from 'lodash'
import { dealLabel } from './dealLabel';

const getUniqueTags = (posts) => {
    let tags: string[] = [];
    const filteredPosts = posts.filter(({ data }) => !data.draft);
    filteredPosts.forEach(post => {
        tags = [...tags, ...dealLabel(post.data.tags)]
            .filter(
                (value: string, index: number, self: string[]) =>
                    self.indexOf(value) === index
            );
    });
    return _.compact(tags);
};

export default getUniqueTags;