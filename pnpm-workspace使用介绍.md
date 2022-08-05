# pnpm-workspace使用介绍

## 使用monorepo多包管理方案

假设项目目录及相关包名称如下：

```js
├── packages
│   ├── ui              // @jack/ui
│   ├── utils           // @jack/utils
│   └── web             // @jack/web
```

1. pnpm install：安装依赖
   - `-w`：表示把包安装在 root 下，该包会放置在 `<root>/node_modules` 下
   - `-r`：安装在所有 packages 中（一般配合`--filter`指定项目目录）

    ```sh
    # 用 pnpm 安装全局共用的包
    pnpm install react react-dom -w
    # 只安装在 packages/web 目录中，其package.json中的name为 @jack/web
    pnpm i dayjs -r --filter @jack/web
    ```

## 关键命令参数

## 资料

- [使用 pnpm 构建 Monorepo 项目](https://zhuanlan.zhihu.com/p/373935751)
