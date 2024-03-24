import {visit} from "unist-util-visit";
import {config} from "../consts.ts";

export function resetRemark() {
  return function (tree) {
    visit(tree, function (node) {
      if (node.type === 'code' && config.codeFoldingStartLines) {
        node.meta += ` collapse={${config.codeFoldingStartLines}-1000000}`
      }

      if (node.type === 'code' && node.lang === 'mermaid') {
        node.type = 'html'
        node.value = '<pre class="mermaid">\n' + node.value + '</pre>'
      }
    })
  }
}
