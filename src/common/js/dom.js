export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let saveClass = el.className.split(' ')
  saveClass.push(className)
  el.className = saveClass.join(' ')
}

function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
