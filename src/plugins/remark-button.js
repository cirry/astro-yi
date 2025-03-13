import {h as _h, s as _s} from "hastscript";
import {visit} from "unist-util-visit";

/** Hacky function that generates an mdast HTML tree ready for conversion to HTML by rehype. */
function h(el, attrs = {}, children = []) {
  const {tagName, properties} = _h(el, attrs);
  return {
    type: "paragraph",
    data: {hName: tagName, hProperties: properties},
    children,
  };
}


export function remarkButton() {
  const transformer = (tree) => {
    visit(tree, (node, index, parent) => {
      if (node.type !== "containerDirective" && node.type !== "leafDirective" && node.type !== "textDirective") {
        return;
      }
      if (!parent || index === undefined) {
        return;
      }
      if (node.name === "btn" || node.name === 'button') {
        const attributes = node.attributes || {};
        parent.children[index] = h('a',
          {
            class: 'bg-skin-card rounded p-2 font-medium hover:text-skin-active inline hover:text-skin-active',
            style: "text-decoration: none;color :",
            ...attributes,
          },
          node.children.reduce((children, child) => {
            if (child.type === "paragraph") {
              children.push(...child.children);
            } else {
              children.push(child);
            }
            return children;
          }, [])
        )
      }
    });
  };
  return () => transformer;
}
