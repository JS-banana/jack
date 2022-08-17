/**
 *
 * @desc 随机生成颜色
 * @return {String}
 */
export function randomColor(): string {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
}
