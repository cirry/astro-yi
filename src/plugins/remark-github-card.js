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


export function remarkGithubCard() {
  const transformer = (tree) => {
    visit(tree, (node, index, parent) => {
      if (node.type !== "leafDirective") {
        return;
      }
      if (!parent || index === undefined) {
        return;
      }
      if (node.name !== "github") {
        return;
      }
      /**
       * {
       *   type: 'leafDirective',
       *   name: 'github',
       *   attributes: { repo: 'cirry/astro-yi' },
       *   children: [],
       *   position: {
       *     start: { line: 6, column: 1, offset: 49 },
       *     end: { line: 6, column: 32, offset: 80 }
       *   }
       * }
       */

      const repo = node.attributes.repo ? node.attributes.repo : ''
      if (!repo || !repo.includes('/')) {
        return h(
          'div',
          {class: 'hidden'},
          'Invalid repository. ("repo" attributte must be in the format "owner/repo")',
        )
      }
      const author = repo.split('/')[0]
      const repoName = repo.split('/')[1]

      const cardUuid = `GC${Math.random().toString(36).slice(-6)}` // Collisions are not important

      const nAvatar = h(`img#${cardUuid}-avatar`, {class: 'github-avatar mr-4',})


      const nTitle = h('div', {class: 'flex items-center justify-between'}, [
        h('a', {class: 'flex items-center text-inherit text-xl', href: `https://github.com/${repo}`, target: '_blank',}, [
          nAvatar,
          h('div', {class: ''}, [{type: "text", value: author}]),
          h('div', {class: 'mx-1'}, [{type: "text", value: '/'}]),
          h('div', {class: 'font-bold break-all truncate',}, [{type: "text", value: repoName}]),
        ]),
      ])

      const nDescription = h(
        `div#${cardUuid}-description`,
        {class: 'my-2'}, [
          {type: "text", value: 'Waiting for api.github.com...',},
        ]
      )

      const nStars = h('div', {class: 'flex items-center'}, [
        h('i', {class: 'ri-star-line',}, []),
        h(`div#${cardUuid}-stars`, {class: 'ml-1 mr-4'}, [{type: "text", value: "Waiting"}])
      ])
      const nForks = h('div', {class: 'flex items-center'}, [
        h('i', {class: 'ri-git-fork-line',}, []),
        h(`div#${cardUuid}-forks`, {class: 'ml-1 mr-4'}, [{type: "text", value: "Waiting"}])
      ])

      const nLicense = h('div', {class: 'flex items-center'}, [
        h('i', {class: 'ri-copyright-line',}, []),
        h(`div#${cardUuid}-license`, {class: 'ml-1 mr-4'}, [{type: "text", value: "Waiting"}])
      ])
      const nScript = h(
        `script#${cardUuid}-script`,
        {type: 'text/javascript', defer: true},
        [
          {
            type: "script", value: `
      fetch('https://api.github.com/repos/${repo}', { referrerPolicy: "no-referrer" }).then(response => response.json()).then(data => {
        if (data.description) {
        document.getElementById('${cardUuid}-description').innerText = data.description.replace(/:[a-zA-Z0-9_]+:/g, '');
        } else {
          document.getElementById('${cardUuid}-description').innerText = "Description not set"
        }
        document.getElementById('${cardUuid}-forks').innerText =  data.forks || 0;
        document.getElementById('${cardUuid}-stars').innerText = data.watchers || 0;
        const avatarEl = document.getElementById('${cardUuid}-avatar');
        avatarEl.setAttribute("src", data.owner.avatar_url)
        if (data.license?.spdx_id) {
          document.getElementById('${cardUuid}-license').innerText = data.license?.spdx_id
        } else {
          document.getElementById('${cardUuid}-license').innerText = "No License"
        };
        document.getElementById('${cardUuid}-card').classList.remove("fetch-waiting");
        console.log("[GITHUB-CARD] Loaded card for ${repo} | ${cardUuid}.")
      }).catch(err => {
        const c = document.getElementById('${cardUuid}-card');
        c.classList.add("fetch-error");
        console.warn("[GITHUB-CARD] (Error) Loading card for ${repo} | ${cardUuid}.")
      }) `,
          }]
      )

      // remove(node, (child) => {
      //   if (child.data && "directiveLabel" in child.data && child.data.directiveLabel) {
      //     return true;
      //   }
      // });
      // remove(node,child => {
      //   return true
      // });


      parent.children[index] = h(
        `div#${cardUuid}-card`,
        {
          class: 'shadow w-auto flex flex-col bg-skin-card p-4 my-4 rounded-lg',
          href: `https://github.com/${repo}`,
          target: '_blank',
          repo,
        },
        [
          nTitle,
          nDescription,
          h('div', {class: 'flex'}, [nStars, nForks, nLicense]),
          nScript
        ],
      )
    });
  };

  return () => transformer;
}
