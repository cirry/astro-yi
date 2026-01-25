import {en} from './en'
import {zhCn} from './zhCn'
import {cs} from './cs'
import {zhHant} from './zhHant'
import {config} from "../consts";
const ui = {
  en, 'zh-cn': zhCn, 'zh-hant': zhHant, cs
}

export type Lang = keyof typeof ui;
export type Dict = typeof en;

const translations: Record<Lang, Partial<Dict>> = ui;

export function useTranslations(lang: Lang) {
  return function t(key: keyof Dict) {
    return translations[lang][key] || en[key];
  }
}

export const t = useTranslations(config.lang)

