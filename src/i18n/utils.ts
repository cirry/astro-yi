import {en} from './en'
import {zh} from './zh'
import {config} from "../consts";

const ui = {
  en, zh
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof config.lang]) {
    return ui[lang][key] || ui[config.lang][key];
  }
}

export const t = useTranslations(config.lang)
