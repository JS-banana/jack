const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  title: 'AiLPHA-components',
  description: '一个基于vue2的高级业务组件封装',
  plugins: ['demo-container'],
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/favicon.ico`,
      },
    ],
  ],
  themeConfig: {
    docsDir: 'docs',
    lastUpdated: '上次更新',
    nav,
    sidebar,
  },
}
