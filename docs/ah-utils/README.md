# Ah-Utils

配套的工具函数类库

## 介绍

1. 该项目在 `packages/utils` 目录下进行维护，发布的包名称为 `@ah-ailpha/utils`，你可以在 npm 进行下载体验。

2. 该工具库使用 TypeScript 进行开发，具有完善的类型系统支持，可以协助你进行高效的项目开发。

3. 同时为了适应不同场景的开发需求，本项目最终构建发布的包支持多种类型：

   - CommonJs
   - ESModule

4. 并构建了多种格式：

   - umd
   - cjs
   - es

你可以分别在不同目录下查看

```js
;-dist - es - lib
```

## 使用

首先，进行 npm 安装

```sh
pnpm i @ah-ailpha/utils
```

1. 全量引入

   ```js
   import * as utils from '@ah-ailpha/utils'

   utils.randomColor()
   ```

2. 按需引入

   ```js
   import { randomColor } from '@ah-ailpha/utils' // 按需加载

   randomColor()
   ```
