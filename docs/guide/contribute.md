---
title: 参与开发
---

## 如何参与开发

本项目采用 monorepo 方案，使用 pnpm workspaces + changeset 管理，在开发之前，你需要先安装 [pnpm](https://pnpm.io/installation)。

```sh
npm install -g pnpm
```

考虑到网络问题，你可以安装 nrm 管理镜像源 [nrm](https://www.npmjs.com/package/nrm)

```sh
npm i nrm -g
# 查看可选源
nrm ls
# 使用源
nrm use taobao
```

### 安装依赖

下面列出的所有命令，你都应该确保是在项目根目录下执行的（不要进入某个具体的子项目操作，一切都在全局目录下进行）。

1. 安装依赖

   ```sh
   # 默认会安装所有子项目的依赖
   pnpm install
   ```

   ```sh
   # 安装到全局 -w
   pnpm add <package-name> -Dw
   ```

2. 安装到指定子项目中

   ```sh
   pnpm add <package-name> --filter <target-package-name>

   # 比如要将lodash装到package-a下
   # --filter 后面可以为目录名称也可以为 package.josn 的 name 名称
   pnpm add dayjs --filter @ah-ailpha/package-a
   ```

   在安装完内部依赖后，需要在根目录下执行一次 pnpm install，构建依赖包链接关系

3. 创建或进入子项目中进行开发

   - `mkdir xx && cd xx && npm init -y` 快速创建一个子项目
   - 你需要确保的是 `package.json`文件的 name 必须以`@ah-ailpha/xx`这样的形式命名

4. 确定包版本

   - 本项目包版本 version 和 CHANGELOG 日志由 changeset 控制，你只需要执行以下脚本即可，在开始之前你应该已经了解了[semver 规范](https://semver.org/lang/zh-CN/spec/v2.0.0.html)
   - 执行以下命令后会出现交互式 CLI，请选择自己的子项目，并根据自己的子项目确定版本更新

   ```sh
   # 1. 预构建选择版本
   pnpm run preversion
   # 2. 确定版本
   pnpm run version
   ```

5. 发布包到 npm

   如果你未改动涉及到源码文件的部分，则可以选择第二种方式，减少非必要的 build 构建，直接发布更新即可。

   ```sh
   # 先构建项目再发布包
   pnpm run release
   # 不构建build，直接发布包
   pnpm run release:nobuild
   ```

### 开发调试

开发阶段我们关注 examples 目录，作为我们的开发调试目录

示例：

当我们需要进行 `@ah-ailpha/pro-sqltiptree`包的开发调试时，首先在根目录下执行安装命令

```sh
pnpm i @ah-ailpha/pro-sqltiptree@* --filter examples
```

这里我们选择指定版本为 \*，方便我们进行开发调试，保证依赖为实时最新状态
