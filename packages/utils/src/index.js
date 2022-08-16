/**
 * utils 工具函数
 */

// 'use strict'

// if (process.env.NODE_ENV === 'production') {
//   export default require('./dist/shared.cjs.prod.js')
// } else {
//   export default require('./dist/shared.cjs.js')
// }

// dom
export * from './dom/getScrollTop'
export * from './dom/offset'
export * from './dom/scrollTo'
export * from './dom/setScrollTop'
export * from './dom/windowResize'

// object
export * from './object/deepClone'
export * from './object/isEmptyObject'
