interface TimeResponse {
  d: number
  h: number
  m: number
  s: number
}

/**
 * @desc ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
 * @param { Date | String } startTime
 * @param { Date | String } endTime
 * @returns { Object } { d, h, m, s } 天 时 分 秒
 */
export function getTimeLeft(startTime: Date | string, endTime: Date | string): TimeResponse | undefined {
  if (!startTime || !endTime) {
    return
  }
  let startDate, endDate
  if (startTime instanceof Date) {
    startDate = startTime
  } else {
    startDate = new Date(startTime.replace(/-/g, '/')) //开始时间
  }
  if (endTime instanceof Date) {
    endDate = endTime
  } else {
    endDate = new Date(endTime.replace(/-/g, '/')) //结束时间
  }
  const t = endDate.getTime() - startDate.getTime()
  let d = 0,
    h = 0,
    m = 0,
    s = 0
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24)
    h = Math.floor((t / 1000 / 60 / 60) % 24)
    m = Math.floor((t / 1000 / 60) % 60)
    s = Math.floor((t / 1000) % 60)
  }
  return { d, h, m, s }
}
