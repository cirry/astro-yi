import {orderBy} from 'lodash-es'
import dayjs from 'dayjs'

export const orderBySticky = (posts) => {
  let handlePosts = posts.map(post => {
    post.sticky = post.data.sticky ? post.data.sticky : 0
    post.dateTimestamp = dayjs(post.data.date).valueOf()

    return post
  })
  return orderBy(handlePosts, ['sticky', 'dateTimestamp'], ['desc', 'desc'])
}
