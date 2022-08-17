/**
 *
 * @desc H5软键盘缩回、弹起回调
 * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
 * @param {Function} downCb 当软键盘弹起后，缩回的回调
 * @param {Function} upCb 当软键盘弹起的回调
 */

export function windowResize(downCb: () => void, upCb: () => void): void {
  const clientHeight = window.innerHeight
  downCb = typeof downCb === 'function' ? downCb : function () {}
  upCb = typeof upCb === 'function' ? upCb : function () {}
  window.addEventListener('resize', () => {
    const height = window.innerHeight
    if (height === clientHeight) {
      downCb()
    }
    if (height < clientHeight) {
      upCb()
    }
  })
}
