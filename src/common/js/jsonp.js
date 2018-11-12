import resourceJsonp from 'jsonp'
export default function jsonp(url, data, opt) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + getData(data)
  return new Promise((resolve, reject) => {
    resourceJsonp(url, opt, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
function getData(data) {
  let url = ''
  for (let i in data) {
    let val = data[i] === 'undefined' ? '' : data[i]
    url += `&${i}=${encodeURIComponent(val)}`
  }
  return url ? url.substring(1) : ''
}
