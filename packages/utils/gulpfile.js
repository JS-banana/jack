const { series, src, dest } = require('gulp')
const _ = require('gulp-load-plugins')()

function handlerJs() {
  return (
    src('./src/**')
      .pipe(_.babel({ presets: ['es2015'] })) // 将ES6以上的语法转换为ES5的语法
      .pipe(_.uglify()) // 将js压缩
      // .pipe(_.rename({ extname: '.min.js' })) // 重命名文件
      .pipe(dest('lib'))
  )
}

exports.build = series(handlerJs)
