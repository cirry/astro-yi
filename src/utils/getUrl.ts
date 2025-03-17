const isProd = import.meta.env.PROD;
// import {}
export default function getUrl(path: string) {
  if (path === '' || path === 'javascript:void(0);') {
    return ''
  }
  return isProd ? import.meta.env.BASE_URL + path : path
}
