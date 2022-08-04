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
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '基础组件',
        link: '/components/button',
      },
      {
        text: '高级组件',
        link: '/pro-components/comSqlTipTree',
      },
    ],
    sidebar: {
      '/guide/': [['', '使用指南']],
      '/components/': [['button', 'Button']],
      '/pro-components/': [['comSqlTipTree', 'ComSqlTipTree']],
    },
  },
}
