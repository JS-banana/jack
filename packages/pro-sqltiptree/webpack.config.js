const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('../../build/webpack.base.config')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const dayjs = require('dayjs')
const pkg = require('./package.json')

process.env.NODE_ENV = 'production'

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'index.min.js',
    library: 'pro-sqltiptree', // pkg.name.slice(11) // @ah-ailpha/pro-sqltiptree
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  plugins: [
    // @todo
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.BannerPlugin({
      banner: `/*!
  * ${pkg.name} v${pkg.version} 🖖
  * Released ${dayjs().format('YYYY-MM-DD HH:mm:ss')}.
  */`,
      raw: true,
      entryOnly: true,
    }),
  ],
})
