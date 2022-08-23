---
title: monorepo相关技术栈的学习分享
---

本章内容的主要作用是为了分享在搭建和开发本项目的过程中，涉及到的不同技术栈的答疑解惑，同时也是为了分享对于一些技术框架和工具的理解，从而在使用的过程中可以更高效的进行开发，就长期而言这也是学习一些新技术的好机会。

## 技术栈阐明

首先，根据本项目实战涉及到的技术点，以及分享学习的技术点如下：

- yarm/pnpm workspace 工作空间概念
- [pnpm 工具的使用及其在 monorepo 场景下的使用](pnpm-monorepo.md)
- monorepo 多包管理方案的理解
- [lernaJS 多包管理工具的使用(本项目未采纳)](lerna.md)
- [changeset 版本管理工具的使用](changeset.md)
- webpack 组件类发包学习使用
- rollup 工具类发包学习使用

## 相关工具库

- `@lerna-lite/cli`：lerna 的轻量包
- `concurrently`：多脚本运行工具
- `@preconstruct/cli`：在 monorepos 中无痛苦地开发和构建你的代码
- `husky`、`pre-commit`：commit 提交的验证
- `pretty-quick`：快速的执行格式化，类似 prettier 的功能，只处理变动的部分
- `@ls-lint/ls-lint`：验证文件名和目录名是否符合规范
- `lint-staged`：处理 git 暂存区的文件，一般配和 pre-commit 做对应脚本的执行，如 `eslint --fix`
- `@changesets/cli`：Changesets 是一个用于 Monorepo 项目下版本以及 Changelog 文件管理的工具
