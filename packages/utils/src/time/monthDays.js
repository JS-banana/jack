/**
 * @desc 获取指定日期月份的总天数
 * @param {Date} time
 * @return {Number}
 */
function monthDays(time) {
  time = new Date(time)
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  return new Date(year, month, 0).getDate()
}
export default monthDays
