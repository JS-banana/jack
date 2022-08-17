import { getScrollTop } from './getScrollTop'
import { setScrollTop } from './setScrollTop'

const requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
  )
})()
/**
 *
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to
 * @param {Number} duration
 */
export function setScrollTo(to: number, duration: number): void {
  if (duration < 0) {
    setScrollTop(to)
    return
  }
  const diff = to - getScrollTop()
  if (diff === 0) return
  const step = (diff / duration) * 10
  requestAnimFrame(function () {
    if (Math.abs(step) > Math.abs(diff)) {
      setScrollTop(getScrollTop() + diff)
      return
    }
    setScrollTop(getScrollTop() + step)
    if ((diff > 0 && getScrollTop() >= to) || (diff < 0 && getScrollTop() <= to)) {
      return
    }
    scrollTo(to, duration - 16)
  })
}
