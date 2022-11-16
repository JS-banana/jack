# @jack/xx 集合仓库

**@jack**是一个采用了 `pnpm + workspace + changeset` 的**monorepo**多包管理组件化项目，当前技术栈为 vue2 相关生态为主（公司实际需求背景），项目设计是按照使用场景进行划分，目前主要包括基础组件、高级组件、工具类库等。

子项目统一维护在 `packages/*`目录下，本项同时配套有文档网站系统（`docs`）、开发调试的真实模拟环境（`examples`），并做了 TypeScript 的支持，完善的项目工程化规范，包括但不限于 `ESlint`/`Prettier`/`CommitLint`

## 特性

- `TypeScript` 支持（目前主要使用在工具类子项目中）
- 高性能`pnpm`工具，并搭配 `workspace`高效解决相互依赖关系
- 完善的工程化规范 `husky`/`eslint`/`prettier`/`commitlint`
- 使用`changeset`进行多包版本管理，自动维护有 `CHANGELOG`日志
- `vuepress`文档网站系统
- 组件库使用`webpack`构建
- 工具类使用`rollup`构建

## 介绍

本项目采用最新的工具、最高效的设计、最简单上手的 pnpm + workspace + monorepo 方案

主要技术栈如下：

1. 组件类的开发、构建打包使用 JavaScript + Vue + Webpack
2. 工具类的开发、构建打包使用 TypeScript + Rollup
3. 文档网站当前方案使用的是 vuepress（基于 vue2、webpack）

`package.json` 相关脚本命令如下：

```json
"scripts": {
  // 项目工程脚本
  "preinstall": "npx only-allow pnpm",
  "prepare": "husky install",

  // 开发和文档
  "dev": "pnpm run -C examples serve",
  "docs:dev": "pnpm run -C docs dev",
  "docs:build": "pnpm run -C docs build",

  // 格式化相关
  "lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx,.json --max-warnings 0",
  "lint:fix": "eslint --fix . --ext .vue,.js,.ts,.jsx,.tsx,.json",
  "lint:utils": "eslint --fix \"./packages/utils/**\" --ext .js,.ts,.json",
  "markdownlint": "markdownlint \"./packages/**/*.md\"",
  "markdownlint:fix": "markdownlint --fix \"**/*.md\"",
  "format:code": "prettier -w . --cache --plugin-search-dir=.",
  "pretty-quick": "pretty-quick --staged",

  // CHANGELOG
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",

  // 包构建相关
  "clean": "pnpm run --filter \"./packages/**\" -r --parallel clean",
  "build:utils": "pnpm run --filter utils build",
  "build:packages": "pnpm run --filter \"./packages/**\" -r --parallel build",

  // 包版本相关
  "preversion": "changeset",
  "version": "changeset version && pnpm install --no-frozen-lockfile && pnpm run format:code",
  // 包发布相关
  "release": "pnpm run clean && pnpm run build:packages && changeset publish",
  "release:nobuild": "changeset publish"
}
```

## TO DO LIST

- [x] TypeScript 支持
- [x] 文档网站开发，支持预览和 demo 查看、源码查看
- [x] 组件库方案，支持 npm 发包，按需加载
- [x] 配套的工程化配置，包括 eslint、commitlint 等
- [ ] 在开发的过程中希望做到一定的自动化功能，如：文档 API 生成、demo 与源码自动区分展示
- [x] vue2 技术栈的配套产出（本项目）
- [ ] vue3 技术栈的配套产出
- [ ] react 技术栈的配套产出
