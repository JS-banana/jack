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
export * from './dom/getOffset'
export * from './dom/setScrollTo'
export * from './dom/setScrollTop'
export * from './dom/windowResize'
// object
export * from './object/deepClone'
export * from './object/isEmptyObject'

// random
export * from './random/randomColor'
export * from './random/randomNum'

// regexp
export * from './regexp/isColor'
export * from './regexp/isEmail'
export * from './regexp/isIdCard'
export * from './regexp/isPhoneNum'
export * from './regexp/isUrl'

// string
export * from './string/digitUppercase'

// time
export * from './time/formatPassTime'
export * from './time/formatRemainTime'
export * from './time/isLeapYear'
export * from './time/isSameDay'
export * from './time/getMonthDays'
export * from './time/getTimeLeft'

// url
export * from './url/parseQueryString'
export * from './url/stringfyQueryString'
