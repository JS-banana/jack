# pnpm-monorepo 方案研究

## 介绍

pnpm 官方介绍（文档）：<https://pnpm.io/zh/motivation>

如何使用？

直接通过 npm 安装：`npm install -g pnpm`

版本要求：

6.x => node 12
7.x => node 14

## 配置

pnpm 内置了对单一存储库（也称为多包存储库、多项目存储库或单体存储库）的支持， 你可以创建一个 workspace（工作空间） 以将多个项目合并到一个仓库中。

一个 workspace 的根目录下必须有 `pnpm-workspace.yaml` 文件， 也可能会有 `.npmrc 文件。

peerDependencies：

- npm：自动安装 peers
- yarn：否
- pnpm：通过 auto-install-peers=true 开启

## 关键参数

| npm 命令        | pnpm 等效      |
| --------------- | -------------- |
| `npm install`   | `pnpm install` |
| `npm i <pkg>`   | `pnpm i <pkg>` |
| `npm run <cmd>` | `pnpm <cmd>`   |

**全局命令**

- `--filter`：过滤，过滤允许您将命令限制于包的特定子集，一般用于 packages/\* 下面的子项目。

  ```sh
  pnpm i dayjs -r --filter @jack/web
  ```

- `-C`：在 `<path>` 中启动 pnpm ，而不是当前的工作目录。

  ```sh
  # 运行项目下的 docs 目录中的 dev
  pnpm run -C docs dev
  ```

- `-w`（`--workspace-root`）：在工作空间的根目录中启动 pnpm ，而不是当前的工作目录。

  ```sh
  # vue依赖作为全局安装在根目录中
  pnpm i vue -w
  # 开发依赖 -D
  pnpm i eslint -Dw
  ```

**pnpm install**

在 workspace 内, pnpm install 下载项目所有依赖. 如果想禁用这个行为, 将 `recursive-install` 设置为 `false`。

`--shamefully-hoist`：创建一个扁平 node_modules 目录结构, 类似于 npm 或 yarn. 一般配置在`.npmrc`中。

- 安装依赖

  - `-w`：表示把包安装在 root 下，该包会放置在 `<root>/node_modules` 下
  - `-r`：安装在所有 packages 中（一般配合`--filter`指定项目目录）

    ```sh
    # 用 pnpm 安装全局共用的包
    pnpm install vue -w
    # 只安装在 packages/web 目录中，其package.json中的name为 @jack/web
    pnpm i dayjs -r --filter @jack/web
    ```

    如 vue 这样多个子项目都需要使用的包，可以安装到全局。

**pnpm run**

- `-r`：针对每个 package.json script 对象中执行对应的命令，没有匹配到则跳过。
- `--parallel`：忽略并发，立即在所有匹配的软件包中运行一个给定的脚本，用于在许多 packages 上长时间运行的进程，例如冗长的构建进程。
- `--stream`：以起始 package 目录作为前缀，立即从子进程输出流。 这允许从不同的 package 交替输出。

  ```sh
  # 执行每个子项目的 clean 命令
  # 清理 packages 下面所有子项目
  pnpm run -r --parallel clean
  ```

## 使用 monorepo 多包管理方案

假设项目目录及相关包名称如下：

```js
├── packages
│   ├── ui              // @jack/ui
│   ├── utils           // @jack/utils
│   └── web             // @jack/web
```

当我们在 web 项目中安装 ui 作为依赖时：

pnpm workspace 会自动管理软连接到指定项目，你只需关注开发即可

package.json 如下：

```json
{
  "dependencies": {
    "@jack/ui": "workspace:^0.0.1"
  }
}
```

发布的时候包名称会自动调整为

```json
{
  "dependencies": {
    "@jack/ui": "^0.0.1"
  }
}
```

对应版本符合规范`workspace:*`, `workspace:~`, or `workspace:^`

## npm 发包

> 在 npm publish 之前你应该已经 npm login 登录过了~

使用`changeset publish`时，会报`npm ERR! 402 Payment Required`错误

原因：无法发布到私有包，当包名以`@your-name`开头时，`npm publish`会默认发布为私有包，但是 npm 的私有包需要付费

402 错误

```js
npm ERR! code E402
npm ERR! 402 Payment Required - PUT https://registry.npmjs.org/.... - You must sign up for private packages
```

package.jsom 配置

```json
{
  "publishConfig": {
    "access": "public"
    // "registry": "https://registry.npmjs.org/"
  }
}
```

## 资料

- [使用 pnpm 构建 Monorepo 项目](https://zhuanlan.zhihu.com/p/373935751)
