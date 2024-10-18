import {en} from './en'
import {zhCn} from './zhCn'
import {zhHant} from './zhHant'
import {config} from "../consts";

const ui = {
  en, 'zh-cn': zhCn, 'zh-Hant': zhHant
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key];
  }
}

export const t = useTranslations(config.lang)
