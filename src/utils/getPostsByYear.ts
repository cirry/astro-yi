// 根据年份归档博文
import {keys,} from 'lodash-es'
import dayjs from 'dayjs'

const getPostsByYear = (posts) => {
  let obj = {}
  posts.forEach(post => {
    let postCreateYear = dayjs(post.data.date).format("YYYY")
    if (keys(obj).includes(postCreateYear)) {
      obj[postCreateYear] = [...obj[postCreateYear], post]
    } else {
      obj[postCreateYear] = [post]
    }
  })
  return obj
}
export default getPostsByYear;
