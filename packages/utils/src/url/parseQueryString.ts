/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
export function parseQueryString(url: string): Record<string, any> {
  url = !url ? window.location.href : url
  if (url.indexOf('?') === -1) {
    return {}
  }
  let search: string | string[] = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1)
  if (search === '') {
    return {}
  }
  search = search.split('&')
  const query: Record<string, any> = {}
  for (let i = 0; i < search.length; i++) {
    const pair = search[i].split('=')
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }
  return query
}
