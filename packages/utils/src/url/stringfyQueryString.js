/**
 *
 * @desc   对象序列化
 * @param  {Object} obj
 * @return {String}
 */
function stringfyQueryString(obj) {
  if (!obj) return ''
  const pairs = []

  for (const key in obj) {
    const value = obj[key]

    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]))
      }
      continue
    }

    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
  }

  return pairs.join('&')
}

export default stringfyQueryString
