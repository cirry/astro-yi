import {en} from './en'
import {zhCn} from './zhCn'
import {config} from "../consts";

const ui = {
  en, 'zh-cn':zhCn
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof config.lang]) {
    return ui[lang][key] || ui[config.lang][key];
  }
}

export const t = useTranslations(config.lang)
