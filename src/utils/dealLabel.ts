import _ from 'lodash'
export const dealLabel = (label) => {
  if (_.isEmpty(label)) {
    return []
  } else if (_.isString(label)) {
    let arr = label.split(',')
    return [...arr]
  } else if (_.isArray(label)) {
    return [...label]
  }
  return []
}
