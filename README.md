# @jack 组件库

## 参与开发

### 准备

本项目使用 pnpm+workspace 来管理 monorepo 多包方案，请确定安装了 pnpm。

推荐 7.x 及以上版本

6.x => node 12
7.x => node 14

### 步骤

1. 克隆本项目

2. 安装依赖

   ```sh
   # 该命令会自动安装工作区的所有子项目中的依赖
   pnpm install
   ```

3. 启动项目

   如果你是想调试和开发组件，可以关注 example 目录

   ```sh
   pnpm dev
   ```

   如果你是想调试和编写文档，可以关注 docs 目录

   ```sh
   pnpm docs:dev
   ```

### 开发

如果你在 pakages 下面新增了一个子目录，确保进入目录中执行了一次 `pnpm install`，比如当前新增目录为 `pro-dragmodal`，那么当你想在 examples 项目中进行调试时，你需要这样做：

进入 examples 目录，安装 `@ah-ailpha/pro-dragmodal` 作为依赖

```sh
# 安装依赖
pnpm i @ah-ailpha/pro-dragmodal
```
