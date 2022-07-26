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
        text: '组件',
        link: '/components/button',
      },
    ],
    sidebar: {
      '/guide/': [['', '使用指南']],
      '/components/': [
        ['button', 'Button'],
        ['comSqlTipTree', 'ComSqlTipTree'],
      ],
    },
  },
}
