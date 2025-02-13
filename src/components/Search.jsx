import {createSignal} from "solid-js";
import {toString, cloneDeep,} from 'lodash-es'
import {dealLabel} from "../utils/dealLabel.ts"
import {formatDate} from "../utils/formatDate.ts";
import {t} from '../i18n/utils.ts'

export function Search(props) {
  const [inputVal, setInputVal] = createSignal('')
  const [resultPosts, setResultPosts] = createSignal([])

  const handleChange = (e) => {
    setInputVal(e.target.value)
    if (e.target.value === '') {
      setResultPosts([])
    } else {
      let filterBlogs = props.posts.filter(post =>
        toString(post.data.title).toLowerCase().includes(inputVal().toLowerCase())
        || toString(post.data.description).toLowerCase().includes(inputVal().toLowerCase())
      )
      let cloneBlogs = cloneDeep(filterBlogs)
      const reg = new RegExp(e.target.value, 'gi')
      cloneBlogs.forEach(blog => {
        blog.data.title = blog.data.title.replace(reg, (match) => {
          return `<span class="text-skin-active font-bold">${match}</span>`
        })
        if (blog.data.description) {
          blog.data.description = blog.data.description.replace(reg, (match) => {
            return `<span class="text-skin-active font-bold">${match}</span>`
          })
        } else {
          blog.data.description = ''
        }
      })
      setResultPosts(cloneBlogs)
    }
  }

  return (
    <div>
      <label class="relative block">
        <span class="absolute inset-y-0 flex items-center pl-2 opacity-75">
          <i class="ri-search-line text-skin-active ml-1"></i>
        </span>
        <input
          id="search-input"
          class="block w-full rounded border border-opacity-40 bg-skin-fill text-skin-base py-3 pl-10 pr-3 placeholder:italic placeholder:text-opacity-75 focus:border-skin-accent focus:outline-none"
          placeholder={t('search.placeholder')}
          type="text"
          name="search"
          value={inputVal()}
          onInput={handleChange}
          autofocus
        />
      </label>

      {resultPosts().length > 0 && <div class="my-2">{t('search.searchLabelOne')}<span class="px-2 font-bold text-skin-active">{resultPosts().length}</span>{t('search.searchLabelTwo')}</div>}

      <div class="my-4">
        {resultPosts().map(post =>
          <>
            <a
              class="text-xl underline-offset-4 decoration-skin-base decoration-wavy hover:underline hover:decoration-sky-500 font-bold"
              href={'/' + post.collection + '/' + post.slug} innerHTML={post.data.title}>
            </a>
            <div class="flex items-center">
              {post.data.date ?
                <div class="flex items-center mr-2"><i class="ri-calendar-2-fill mr-1"/>{formatDate(post.data.date)}</div>
                : ''}

              {dealLabel(post.data.category).filter(item => item !== 'uncategorized').map((categoryName) => (
                <a class="flex items-center mr-2" href={"/category/" + categoryName}><i class="ri-folder-3-line mr-1"/>{categoryName}</a>
              ))}

              {dealLabel(post.data.tags).map((tagName) => (
                <a class="flex items-center mr-2" href={"/tags/" + tagName}><i class="ri-hashtag mr-1"/>{tagName}</a>
              ))}
            </div>
            <p class="break-all mb-4" innerHTML={post.data.description}></p>
          </>
        )}
      </div>
    </div>
  )
}
