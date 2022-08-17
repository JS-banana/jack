/**
 * @desc   判断是否为同一天
 * @param  {Date} date1
 * @param  {Date} date2 可选／默认值：当天
 * @return {Boolean}
 */
export function isSameDay(date1: Date, date2: Date): boolean {
  if (!date2) {
    date2 = new Date()
  }
  const date1_year = date1.getFullYear(),
    date1_month = date1.getMonth() + 1,
    date1_date = date1.getDate()
  const date2_year = date2.getFullYear(),
    date2_month = date2.getMonth() + 1,
    date2_date = date2.getDate()

  return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year
}
