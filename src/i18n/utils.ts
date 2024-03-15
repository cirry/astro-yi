import { ui } from './ut';
import {config} from "../consts";

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof config.lang]) {
    return ui[lang][key] || ui[config.lang][key];
  }
}

export const t = useTranslations(config.lang)
