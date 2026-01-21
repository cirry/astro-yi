import {visit} from "unist-util-visit";
import getUrl from "../utils/getUrl.js";

export function lazyLoadImage() {
  return function (tree) {
    visit(tree, function (node) {
      if (node.tagName === 'img') {
        const src = node.properties.src;
        // 如果 src 是对象（Astro 可能将其转换为资产对象），或者不是远程路径，则跳过
        const isRemote = src && (typeof src === 'string') && (src.startsWith('http') || src.startsWith('https'));

        if (isRemote) {
          node.properties['data-src'] = node.properties.src
          node.properties.src = getUrl('/spinner.gif')
          node.properties['data-alt'] = node.properties.alt
          node.properties.alt = 'default'
        }
      }
    })
  }
}
