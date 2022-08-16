const gulp = require('gulp')
const _ = require('gulp-load-plugins')()

function handlerJs() {
  console.log('准备构建 utils ...')

  gulp.task('compress', function () {
    console.log('开始构建 utils ...')
    gulp
      .src('./src/index.js')
      .pipe(_.babel({ presets: ['es2015'] })) // 将ES6以上的语法转换为ES5的语法
      .pipe(_.uglify()) // 将js压缩
      .pipe(_.rename({ extname: '.min.js' })) // 重命名文件
      .pipe(gulp.dest('lib'))
  })
}

handlerJs()
