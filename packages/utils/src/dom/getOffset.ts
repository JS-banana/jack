interface OffsetResponse {
  left: number
  top: number
}

/**
 *
 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param {HTMLElement} ele
 * @returns { {left: number, top: number} }
 */
export function getOffset(ele: HTMLElement): OffsetResponse {
  const pos = {
    left: 0,
    top: 0,
  }
  let temp: HTMLElement | null = ele
  while (temp) {
    pos.left += temp.offsetLeft
    pos.top += temp.offsetTop
    temp = temp.offsetParent as HTMLElement
  }
  return pos
}
