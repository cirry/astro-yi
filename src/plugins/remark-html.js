import {h as _h, s as _s} from "hastscript";
import {visit} from "unist-util-visit";

function h(el, attrs = {}, children = []) {
  const {tagName, properties} = _h(el, attrs);
  return {
    type: "paragraph",
    data: {hName: tagName, hProperties: properties},
    children,
  };
}

export function remarkHtml() {
  const transformer = (tree) => {
    visit(tree, (node, index, parent) => {
      if (!parent || index === undefined) {
        return;
      }
      if (node.type !== 'textDirective') {
        return;
      }
      if (node.name !== 'i') {
        return
      }
      /*
      *{
      *  type: 'textDirective',
      *  name: 'i',
      *  attributes: { class: '.ri-share-box-line' },
      *  children: [],
      *  position: {
      *    start: { line: 16, column: 1, offset: 273 },
      *    end: { line: 16, column: 31, offset: 303 }
      *  }
      *}
      */

      parent.children[index] = h(node.name,
        {
          ...node.attributes,
        },
      )
    });
  };
  return () => transformer;
}
