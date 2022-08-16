# changeset 基础使用

1. changeset init

   - 新项目执行该命令，完成对项目的初始化
   - 会在根目录下生成 .changeset 目录，`config.json`配置文件

2. changeset

   - 执行该命令，进行版本管理，会交互式选择不同项目，以及确定发布的版本
   - 会生成一些 .md 文件在目录下，会在 version 的时候消耗

3. changeset version

   - 消耗上一步生成的相关的一些版本信息及记录内容的 .md 文件，并生成或更新 CHANGELOG.md 文件，之后 .md 文件会被自动删除
   - 相应的 package.json 中的 version 信息也会同步更新

4. changeset publish

   - 发布包到远程 npm 源
   - 前置条件是你已经进行了 npm 账户登录，如果包名称为 `@ah-ailpha/components`该类型，还需要在 npm 账户中设置组织
