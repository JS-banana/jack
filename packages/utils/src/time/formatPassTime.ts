/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime
 * @return {String}
 */
export function formatPassTime(startTime: Date | any): string {
  const currentTime = Date.parse(`${new Date()}`),
    time = currentTime - startTime,
    day = parseInt((time / (1000 * 60 * 60 * 24)).toString()),
    hour = parseInt((time / (1000 * 60 * 60)).toString()),
    min = parseInt((time / (1000 * 60)).toString()),
    month = parseInt((day / 30).toString()),
    year = parseInt((month / 12).toString())
  if (year) return year + '年前'
  if (month) return month + '个月前'
  if (day) return day + '天前'
  if (hour) return hour + '小时前'
  if (min) return min + '分钟前'
  else return '刚刚'
}
