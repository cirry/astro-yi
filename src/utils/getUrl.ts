const isProd = import.meta.env.PROD;
// import {}
export default function getUrl(path: string) {
    if (path === '' || path === 'javascript:void(0);' || path === '/') {
        return path
    }

    return (isProd && import.meta.env.BASE_URL !== '/') ? import.meta.env.BASE_URL + path : path
}
