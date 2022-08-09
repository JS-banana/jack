const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dayjs = require('dayjs');
const pkg = require('../package.json');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'components.js',
    library: 'components',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    // @todo
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.BannerPlugin({
      banner: `/*!
  * @jack v${pkg.version} 🖖
  * Released ${dayjs().format('YYYY-MM-DD HH:mm:ss')}.
  */`,
      raw: true,
      entryOnly: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
});