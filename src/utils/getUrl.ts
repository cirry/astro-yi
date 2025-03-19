const isProd = import.meta.env.PROD;
import {site} from '../consts'

export default function getUrl(path: string) {
    if (path === '' || path === 'javascript:void(0);') {
        return path
    }

    return isProd  ? (site.baseUrl + path) : path
}
