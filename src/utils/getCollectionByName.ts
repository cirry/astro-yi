import {getCollection} from "astro:content";

export const getCollectionByName = async (name: string) => {
  let posts = await getCollection(name)
  return posts.filter(post => !post.data.draft).map(post => {
    return post
  })

}
