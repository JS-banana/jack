# lerna 工具的使用和优劣分析

## 简单介绍

将大型代码仓库分割成多个独立版本化的 软件包（package）对于代码共享来说非常有用。但是，如果某些更改 跨越了多个代码仓库的话将变得很 麻烦 并且难以跟踪，并且， 跨越多个代码仓库的测试将迅速变得非常复杂。

为了解决这些（以及许多其它）问题，某些项目会将 代码仓库分割成多个软件包（package），并将每个软件包存放到独立的代码仓库中。但是，例如 Babel、 React、Angular、Ember、Meteor、Jest 等项目以及许多其他项目则是在 一个代码仓库中包含了多个软件包（package）并进行开发。

Lerna 是一种工具，针对 使用 git 和 npm 管理多软件包代码仓库的工作流程进行优化

## 如何使用

首先，安装 lerna

```sh
# 全局安装
npm install --global lerna
# 本地项目安装
npm install lerna -D
```

在项目目录下执行 `lerna init`命令进行初始化，会生成一个 `lerna.json`配置文件

Lerna 有两种管理项目的模式：

- Fixed/Locked 模式 (默认)： 所有的包共用一个版本号。
- Independent mode：不同包独立使用自己的版本，我们一般采用这种方式。在初始化的时候指定 --independent 参数

## 命令

1. lerna init：初始化项目 `npx lerna init`，independent 模式需要添加 `--independent`/`-i`

   ```js
   // 会生成如下目录
   lerna - example / packages / package.json
   lerna.json
   ```

2. lerna create：创建一个新的包 `lerna create animal`

   ```js
   // 会包含基本的文件
   └── packages
     ├── animal
     │   ├── README.md
     │   ├── __tests__
     │   │   └── animal.test.js
     │   ├── lib
     │   │   └── animal.js
     │   └── package.json
     └── dog
         ├── README.md
         ├── __tests__
         │   └── dog.test.js
         ├── lib
         │   └── dog.js
         └── package.json
   ```

3. lerna add：添加本地包或者远程包作为包的依赖

   ```sh
   # 向名字以 prefix- 为前缀的文件夹里面添加 module-1 作为依赖
   $ lerna add module-1 packages/prefix-*

   # 向 module-2 中添加 module-1 作为依赖
   $ lerna add module-1 --scope=module-2

   # 向 module-2 中添加 module-1 作为开发依赖（devDependencies）
   $ lerna add module-1 --scope=module-2 --dev

   # 向 module-2 中添加 module-1 作为peerDependencies
   $ lerna add module-1 --scope=module-2 --peer

   # 向除了module-1（因为 module-1 是本地包）的所有包中添加 module-1 作为依赖
   $ lerna add module-1

   # 向所有的包中添加 babel-core 作为依赖（ babel-core 是远程包）
   $ lerna add babel-core
   ```

4. lerna version：发布前更新包的版本 （lerna publish 包含这一步）

   ```sh
   lerna version 1.0.1 # 直接指定特定的版本
   lerna version patch # 使用语义关键字
   lerna version       # 通过交互式命令选择
   ```

   lerna version 在背后为我们做了这些事：

   - 识别出自上次发布以后更新过的包；
   - 提示选择新版本；
   - 修改包的元数据来反映最新发版（修改包的版本号），在根目录和每个包里面运行生命周期脚本；
   - 对提交打 tag；
   - 推送到远程代码仓库。

5. lerna publish：布本地包，发布自上次发布过后更新过的包（背后会执行 lerna version）

   ```sh
   #发布自上次发布过后更新过的包 （背后会执行 lerna version）
   $ lerna publish
   #发布当前通过 lerna version 打好 tag 的包，需要先使用 lerna version 更新版本
   $ lerna publish from-git
   #只发布远程 npm 仓库中没有的版本，适用于 lerna publish 没有全部发布成功的场景。
   $ lerna publish from-package
   ```

6. lerna list：列出所有的本地包

   ```sh
   $ lerna list
   lerna notice cli v5.3.0
   lerna info versioning independent
   animal
   dog
   lerna success found 2 packages
   ```

7. lerna info：打印出本地环境信息

8. lerna changed：列出自上一次发布过后修改过的包

9. lerna clean：移除所有 package 下的 node_modules，除了根目录下的 node_modules

10. lerna bootstrap：建立相互依赖的包之间的软连接并安装其他的依赖

    这个命令在背后执行了以下步骤:

    - 安装所有包的外部依赖
    - 建立存在依赖关系的包之间的依赖
    - 在 bootstrapped 的包中执行 npm run prepublish （没有指定 --ignore-prepublish 的情况下）
    - 在 bootstrapped 的包中执行 npm run prepare

11. lerna diff：列出包自上一次发版以来做出的修改。

    ```sh
    # 列出所有包的改动
    $ lerna diff
    # 列出具体某个包的改动
    $ lerna diff package-name
    ```

12. lerna exec：使用 lerna exec 可以在所有的包目录下执行任意的命令。

    ```sh
    lerna exec -- <command> [..args] # runs the command in all packages
    lerna exec -- rm -rf ./node_modules # 删除所有包下面的 node_modules
    ```

13. lerna run：使用 lerna run 可以在所有的包目录下执行对应的脚本。

14. lerna import：将已经存在的项目作为一个包导入到现有的 lerna 项目中，同时项目的 commit 历史记录会被一并导入。

    ```sh
    lerna import <path-to-external-repository>
    ```

15. lerna link：建立存在依赖关系的包之间的软连接

    ```sh
    lerna link
    ```
