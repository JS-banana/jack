# @jack/xx 集合仓库

采用多包管理方案，维护组件开发、工具类库等

## 基本目标

- [ ] TypeScript支持
- [ ] 文档网站开发，支持预览和demo查看、源码查看
- [ ] 组件库方案，支持npm发包，按需加载
- [ ] 配套的工程化配置，包括eslint、commitlint等
- [ ] 在开发的过程中希望做到一定的自动化功能，如：文档API生成、demo与源码自动区分展示
- [ ] vue2技术栈的配套产出
- [ ] vue3技术栈的配套产出
- [ ] react技术栈的配套产出

## 问题搜集

1. 包发布方案？
   - 整体发布、按需加载
   - 独立发布为一个包
2. 多包方案？
   - lernajs + yarn
   - pnpm
3. vue2和vue3存在一定的生态割裂
   - vue3组件库普遍使用vite、vitepress等
   - vue2使用vite尚可尝试，vitepress只支持vue3，目前只能选择vuepress的1.x的vue2版本
   - 现在市面上大多围绕vue3的技术生态都做到了对TypeScript的很好支持，vue2这方面薄弱
   - 如何在开发vue2的时候贴向vue3值得考虑
   - 新生态下的工具链和插件对效率有很大提高，以及更好的组合管理和设计思路都值得学习

## 方案探究

组件化方案，目前结合公司的实际情况，以`vue2`技术栈为主，这里作为个人项目思考的结果，应该要考虑到`vue3`的生态部分。因此，在结合公司项目做实际开发的过程时，包括但不限于`vue2`、`vue3`、`react`。

总体框架思路应该不受技术栈影响，核心点类似。后期根据不同技术栈再做进一步的针对性开发改进。

### 开源组件化项目

几个思考的思路点：

1. 组件化的方案实施
   - 项目目录和功能的划分
   - npm发包的处理
   - 样式及组件的使用处理
   - 文档网站和组件的API与演示源码的关联处理
   - 如何在保证少写重复代码的同时，完成高质量组件的开发、demo、测试、文档
2. 多包方案的研究学习
   - 具体的实施细节是怎样的
   - `lerna`与`pnpm`方案的具体用法
   - 如何做到对`packages/**`目录下不同项目的高效率发包

开源项目：

1. antd-design-vue
2. element
   - 文档网站整体风格值得参考，主要开发工作在如何处理demo渲染和文档渲染部分
   - element的vue2.x版本：是自行开发搭建的vue项目，通过自行编写的loader和插件，主要技术栈围绕在Webpack
   - element的vue3.x版本：是使用vitepress配合自己编写的插件实现的，全新的技术栈和vue2.x兼容暂时不考虑，主要考虑思路
3. iview
   - 网站整体和element类似，不过对于demo和文档的处理部分有待优化提升
   - 构建方面，技术栈主要集中在Webpack4.x
4. vuesax-next
   - 使用Webpack构建
   - 网站使用vuepress搭建
5. vuetify：使用webpack发布包，此方式值得学习研究和尝试
6. [tdesign-vue（vue2.x版本）](https://github.com/Tencent/tdesign-vue)
7. [antd/pro-components（react）](https://github.com/ant-design/pro-components)

<!-- 心里倾向：

对于element、iview组件库的官方文档比较满意 -->

### 不错的工具类库

1. vite生态markdown相关
   - [vite-plugin-markdown](https://github.com/hmsk/vite-plugin-markdown)
   - [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
2. vuepress生态
   - [vuepress-plugin-demo-container](https://github.com/calebman/vuepress-plugin-demo-container)

## 资料

- [使用Vite和TypeScript带你从零打造一个属于自己的Vue3组件库](https://juejin.cn/post/7117886038126624805)
