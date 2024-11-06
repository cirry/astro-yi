import {h as _h, s as _s} from "hastscript";
import {remove} from "unist-util-remove";
import {visit} from "unist-util-visit";
import {t} from '../i18n/utils.ts';

/** Hacky function that generates an mdast HTML tree ready for conversion to HTML by rehype. */
function h(el, attrs = {}, children = []) {
  const {tagName, properties} = _h(el, attrs);
  return {
    type: "paragraph",
    data: {hName: tagName, hProperties: properties},
    children,
  };
}

export function remarkCollapse(options) {
  options = {
    label: t('remark.open') || "Open",
    ...options,
  };

  const transformer = (tree) => {
    visit(tree, (node, index, parent) => {
      if (node.type !== "containerDirective" && node.type !== "leafDirective") {
        return;
      }
      if (!parent || index === undefined) {
        return;
      }
      if (node.name !== "collapse" && node.name !== "details") {
        return;
      }

      // remark-directive converts a container’s “label” to a paragraph in
      // its children, but we want to pass it as the title prop to <Aside>, so
      // we iterate over the children, find a directive label, store it for the
      // title prop, and remove the paragraph from children.
      let title = options.label;

      remove(node, (child)=> {
        if (child.data && "directiveLabel" in child.data && child.data.directiveLabel) {
          if ("children" in child && Array.isArray(child.children) && "value" in child.children[0]) {
            title = child.children[0].value;
          }
          return true;
        }
      });

      parent.children[index] = h(
        "details",
        {
          class: "remark-collapse"
        }, [
          h("summary", {class: "remark-collapse__summary"}, [{type: "text", value: title}]),
          h("div", {class: "remark-collapse__content"}, node.children),
        ]);
    });
  };

  return () => transformer;
}
