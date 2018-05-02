import TAGS from './tags'

export function ucFirst(value) {
  if(! value) {
    return ''
  }

  value = value.toString()

  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function tagLink(value, type) {
  if(! value) {
    return ''
  }

  value = value.toString()

  return TAGS[value][type]
}