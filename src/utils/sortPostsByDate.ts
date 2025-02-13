import dayjs from 'dayjs'

export const sortPostsByDate = (posts) =>
  posts
    .filter(({data}) => {
      return import.meta.env.PROD ? !data.draft : true
    })
    .sort((a, b) => dayjs(b.data.date).unix() - dayjs(a.data.date).unix());
