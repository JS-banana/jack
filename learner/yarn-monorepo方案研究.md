# yarn-monorepo方案研究

本方案使用lerna工具，并依靠yarn包管理的workspaces进行支持。

## 配置

lerna.json文件中需配置packages

```json
{
  "packages": ["packages/*"],
  // "version": "independent",
  "useWorkspaces": true,
  // "npmClient": "yarn"
}
```

package.json文件同步配置packages

```json
{
  "workspaces": [
    "packages/*",
  ],
}
```

## monorepo是什么

monorepo 是把多个项目的所有代码放到一个 git 仓库中进行管理，多个项目中会有共享的代码则可以分包引用。整个项目就是有 root 管理的 dependencies 加上多个 packages，每个 package 也可以在自己的作用域引入自己的 dependencies。

该方案可以很好的帮助我们解决不同工作区对于相同依赖的管理，以及我们在开发时，包相互间依赖的管理。

如：

在工作区packages下面我们有这些包：`iview`、`pro-sqltiptree`、`components`，其package.json中的name定义分别为`@ah-ailpha/iview`、`@ah-ailpha/pro-sqltiptre`、`@ah-ailpha/components`，在我们相互安装包时，lerna工具可以帮我们以用软链接的形式直接使用。

Lerna 有两种管理项目的模式：

- Fixed/Locked 模式 (默认)： 所有的包共用一个版本号。
- Independent mode：不同包独立使用自己的版本，我们一般采用这种方式。在初始化的时候指定 --independent 参数

## 命令

1. lerna init：初始化项目 `npx lerna init`，independent模式需要添加 `--independent`/`-i`

    ```js
    // 会生成如下目录
    lerna-example/
      packages/
      package.json
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
    - 在 bootstrapped 的包中执行npm run prepublish （没有指定 --ignore-prepublish 的情况下）
    - 在 bootstrapped 的包中执行npm run prepare
  
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

14. lerna import：将已经存在的项目作为一个包导入到现有的lerna项目中，同时项目的 commit 历史记录会被一并导入。

    ```sh
    lerna import <path-to-external-repository>
    ```

15. lerna link：建立存在依赖关系的包之间的软连接

    ```sh
    lerna link
    ```
