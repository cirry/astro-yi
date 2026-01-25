import {isEmpty, isString, isArray} from 'lodash-es'
export const dealLabel = (label: string | string[] | null | undefined) => {
  if (isEmpty(label)) {
    return []
  } else if (isString(label)) {
    let arr = label.split(',')
    return [...arr]
  } else if (isArray(label)) {
    return [...label]
  }
  return []
}
