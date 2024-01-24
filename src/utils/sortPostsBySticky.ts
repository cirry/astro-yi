export const sortPostsBySticky = (posts) =>
    posts
        .filter(({ data }) => data.sticky)
        .sort((a, b) => b.data.sticky - a.data.sticky);
