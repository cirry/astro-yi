import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().or(z.null()).optional(),
        tags: z.array(z.string()).or(z.string()).or(z.null()).optional(),
        date: z.date().or(z.null()).or(z.string()).optional(),
        update: z.date().or(z.null()).or(z.string()).optional(),
        category: z.array(z.string()).or(z.string()).default([]).or(z.null()).optional(),
        sticky: z.number().or(z.null()).optional(),
        permalink: z.string().or(z.null()).optional(),
        mathjax: z.boolean().default(false),
        draft: z.boolean().default(false).or(z.null()),
        toc: z.boolean().default(true),
        donate: z.boolean().default(true),
        comment: z.boolean().default(true),
    })
})

const activityCollection = defineCollection({
    schema: z.object({
        date: z.date().or(z.null()).or(z.string()).optional(),
        donate: z.boolean().default(true),
        comment: z.boolean().default(true),
    })
})
export const collections = {
    'blog': blogCollection,
    'activity': activityCollection
}