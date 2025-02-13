import {flattenDeep, compact} from 'lodash-es'
import {dealLabel} from './dealLabel';

const getUniqueCategory = (posts) => {
  let category: string[] = [];
  const filteredPosts = posts.filter(({data}) => {
    return import.meta.env.PROD ? !data.draft : true
  });
  filteredPosts.forEach(post => {
    category = [...category, ...flattenDeep(dealLabel(post.data.category))]
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );
  });
  return compact(category);
};

export default getUniqueCategory;
