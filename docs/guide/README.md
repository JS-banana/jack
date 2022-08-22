---
title: 简单介绍
---

## 背景

公司目前基于多业务部门，很多业务组件和功能逻辑都具有较高的普适性，但与此同时各业务部分和开发人员缺乏一定的交流平台，更多的是在遇到对应需求时会简单内部讨论一番，当了解到其他业务部分存在落地的方案时，再进一步进行沟通交流。

这种方式，总体来说还是比较原始的，无论从沟通方式的效率来说，还是对于组件业务逻辑的深入理解都是非常低效的。因此，对于探索一种高效的、简单的、现代化方案是非常有必要的。

我们想要实现的目标是：

1. 不同的业务平台开发的组件能够最大程度复用；
2. 新人能够快速了解通用组件，提升开发效率

## 什么是组件化

在前后端分离的现代开发模式下，以`React`、`Vue`为例，涌现了很多优秀的现代化的前端框架，得益于新技术的发展，SPA 应用已经相当成熟，该开发范式也是相当普遍。

伴随着这种技术行为，组件化开发也是应运而生，作为一个非常常规的模式，围绕几点说明：

1. 方便复用（很多业务代码、功能代码都不可避免有所重复，对于组件的复用使用，可谓作用很大）
2. 方便维护（如果大量的业务代码与功能代码耦合一起，对于代码的日后维护和功能拓展都有着很大的局限性和不足）
3. 功能细分、专一、职责明确（组件的核心原则就是，一个组件只做一件事，而且其不应该是有上下强关联耦合性的，可以随用随取，做到职责单一，对于日后功能迭代和代码维护好处都是显而易见的）

就现代前端而言，我觉得组件化已不单单局限于 UI 组件层面，它涉及面更广、更全、也更系统化，类似 hooks 的功能和业务逻辑封装，工具类的使用封装，构建工具、脚本代码等，一切符合其独立思想的都可称为组件化。

## 为什么需要组件化

组件化的目的：

1. 为了让各功能和业务逻辑可以被复用，以减少重复的代码。
2. 可以更好地使团队分工协作，不同的人负责编写不同的组件，提高开发效率。
3. 职责单一也更方便功能的迭代拓展与维护，对于接手的开发人员也能降低不少上手成本

对于需要开发复杂的大型应用的企业来说，组件化开发能极大地提高开发效率，它让前端开发团队能高效地完成工作，是一个非常有用的技术。

简单来说就是两个关键词：“**复用**”、“**易维护**”

代码拆分也好，职责单一也好，基本都离不开这两词，这也正式组件化的核心点。我们做这些事，就是为了之后遇到类似需求和功能的时候减少代码的开发，能够快速重复使用。而对于组件在日后随着功能和业务的发展、包括我们对于组件代码健壮性的提升，都会进行不断的迭代，维护性的重要性也是不言而喻的了。

## 规划设计

首先，以公司实际项目为背景思考，我们的技术栈目前主要围绕 `vue2` 相关生态进行前端 web 后台类系统的开发。因此，主要方案设计也要以此为基础导向进行探索。

就目前而言，我们的组件主要包括可复性较高的业务组件以及一些通用功能组件，也包括一些工具类。组件开发主要依赖于`iview`基础组件和`lodash`工具库，部分特殊业务有使用到`monaco-editor`、`codemirror`等。

因此，我们确定了以三个方向为规划的设计：

1. 基础组件 `@ah-ailpha/components`
2. 高级组件 `@ah-ailpha/pro-*` => `@ah-ailpha/pro-sqltiptree`
3. 工具类 `@ah-ailpha/utils`

使用效果如下：

```js
import { Button } from '@ah-ailpha/components'
import AhProSqlTipTree from '@ah-ailpha/pro-sqltiptree'
import { randomColor } from '@ah-ailpha/utils' // 工具类推荐按需加载使用
```

并配套相应的开环境：

- 完整的工程化规范项目
- 提供真实模拟环境的开发调试
- 方便维护和用户使用的文档网站

项目目录设计如下：

```js
├── examples                        // 演示目录，用于调试代码
├── docs                            // 文档目录，用于编写对应组件的相关文档，以及文档网站的建设配置
├── packages                        // packages工作目录
```

本项目采用最新的工具、最高效的设计、最简单上手的 pnpm + workspace + monorepo 方案

主要技术栈如下：

1. 组件类的开发、构建打包使用 JavaScript + Vue + Webpack
2. 工具类的开发、构建打包使用 TypeScript + Rollup
3. 文档网站当前方案使用的是 vuepress

package.json 相关脚本命令如下：

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

具体的详细内容你可以下点击下方链接快速查看：

- 详细的项目方案设计见[设计方案](./solution.md)
- 详细的开发指南见[参与开发](./contribute.md)
- 详细的使用说明见[如何使用](./use.md)
- 中长期规划见[计划安排](plans.md)
