import {compact} from 'lodash-es'
import {dealLabel} from './dealLabel';

const getUniqueTags = (posts) => {
  let tags: string[] = [];
  const filteredPosts = posts.filter(({data}) => {
    return import.meta.env.PROD ? !data.draft : true
  });
  filteredPosts.forEach(post => {
    tags = [...tags, ...dealLabel(post.data.tags)]
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );
  });
  return compact(tags);
};

export default getUniqueTags;
