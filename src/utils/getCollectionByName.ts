import { getCollection } from "astro:content";
import { sortPostsByDate } from "./sortPostsByDate";

export const getCollectionByName = async (name) => {
    let posts = await getCollection(name)
    return posts.filter(post => !post.data.draft).map(post => {
        // 拼接路由前缀
        if (post.data.permalink) {
            post.slug = post.data.permalink
            post.url = `/${name}/${post.data.permalink}`
        } else {
            post.url = `/${name}/${post.slug}`
        }
        return post
    })

}
