import { createSignal } from "solid-js";
import _ from 'lodash'
import dayjs from "dayjs";
import tz from "dayjs/plugin/timezone";
import { dealLabel } from "../utils/dealLabel"
dayjs.extend(tz);
dayjs.tz.guess(); // 猜测用户时区

export function Search(props) {
    const [inputVal, setInputVal] = createSignal('')
    const [resultPosts, setResultPosts] = createSignal([])

    const handleChange = (e) => {
        setInputVal(e.target.value)
        if (e.target.value === '') {
            setResultPosts([])
        } else {
            setResultPosts(props.posts.filter(post => _.toString(post.data.title).toLowerCase().includes(inputVal().toLowerCase())
                || _.toString(post.data.description).toLowerCase().includes(inputVal().toLowerCase())))
        }
    }

    return (
        <div>
            <label class="relative block">
                <span class="absolute inset-y-0 flex items-center pl-2 opacity-75">
                    <i class="ri-search-line text-skin-active ml-1"></i>
                </span>
                <input
                    class="block w-full rounded border border-opacity-40 bg-skin-fill text-skin-base py-3 pl-10 pr-3 placeholder:italic placeholder:text-opacity-75 focus:border-skin-accent focus:outline-none"
                    placeholder="输入标题或摘要关键字"
                    type="text"
                    name="search"
                    value={inputVal()}
                    autoComplete="off"
                    onInput={handleChange}
                    autoFocus
                />
            </label>

            {resultPosts().length > 0 && <div class="my-2">共找到<span class="px-2 font-bold">{resultPosts().length}</span>篇文章</div>}

            <div class="my-4">
                {resultPosts().map(post =>
                    <>
                        <a
                            class="flex text-xl underline-offset-8 decoration-skin-base decoration-dashed hover:underline hover:decoration-sky-500 font-bold"
                            href={post.url} >{post.data.title}
                        </a>
                        <div class="flex items-center">
                            {post.data.date ?
                                <div class="flex items-center cursor-pointer">
                                    <i class="ri-calendar-2-fill mr-1" />
                                    <div class="tag">{dayjs(post.data.date).format("YYYY-MM-DD")}</div>
                                </div> : ''}

                            {dealLabel(post.data.tags).map((tagName, tagIndex) => (
                                <div class="flex  items-center  cursor-pointer">
                                    <div class="divider-vertical" />
                                    <i class="ri-price-tag-3-fill mr-1" />
                                    <a href={"/tags/" + tagName}>{tagName}</a>
                                    {tagIndex !== dealLabel(post.data.tags).length - 1 && <div class="divider-vertical" />}
                                </div>
                            ))}

                            {dealLabel(post.data.category).map((categoryName, categoryNameIndex) => (
                                <div class="flex  items-center  cursor-pointer">
                                    <div class="divider-vertical" />
                                    <i class="ri-folder-2-fill mr-1" />
                                    <a href={"/category/" + categoryName}>{categoryName}</a>
                                    {categoryNameIndex !== dealLabel(post.data.category).length - 1 && (
                                        <div class="divider-vertical" />
                                    )}
                                </div>
                            ))}
                        </div>
                        <p class="break-all mb-4">
                            {post.data.description}
                        </p>
                    </>
                )}
            </div>
        </div >

    )
}