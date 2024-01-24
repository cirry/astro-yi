import _ from 'lodash'
import dayjs from 'dayjs'

export const orderBySticky = (posts) => {
  let handlePosts = posts.map(post => {
    post.sticky = post.data.sticky ? post.data.sticky : 0
    post.dateTimestamp = dayjs(post.data.date).valueOf()

    return post
  })
  return _.orderBy(handlePosts, ['sticky', 'dateTimestamp'], ['desc', 'desc'])
}
