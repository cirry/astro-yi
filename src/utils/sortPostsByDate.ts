import dayjs from 'dayjs'
export const sortPostsByDate = (posts) =>
    posts
        .filter(({ data }) => !data.draft)
        .sort((a, b) => dayjs(b.data.date).unix() - dayjs(a.data.date).unix());
