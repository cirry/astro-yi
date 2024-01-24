import {getCollection} from "astro:content";

export const getCollectionByName = async (name: string) => {
  let posts = await getCollection(name)
  if (posts && posts.length > 0 ) {
    return posts.filter(post => !post.data.draft).map(post => {
      return post
    })
  }else {
    return []
  }
}
