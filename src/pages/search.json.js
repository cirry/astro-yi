import {getCollectionByName} from "../utils/getCollectionByName.js";

async function getBlogs(context) {
  const blog = await getCollectionByName('blog')
  return blog.map(blog => {
    return {
      slug: blog.slug,
      title: blog.data.title,
      description: blog.data.description,
      date: blog.data.date,
      category: blog.data.category,
      tags: blog.data.tags,
    }
  })
}

export async function GET({}) {
  return new Response(JSON.stringify(await getBlogs()), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
