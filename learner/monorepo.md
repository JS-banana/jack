# monorepo 相关内容整理

## 相关工具库

- `@lerna-lite/cli`：lerna 的轻量包
- `concurrently`：多脚本运行工具
- `@preconstruct/cli`：在 monorepos 中无痛苦地开发和构建你的代码
- `husky`、`pre-commit`：commit 提交的验证
- `pretty-quick`：快速的执行格式化，类似 prettier 的功能，只处理变动的部分
- `@ls-lint/ls-lint`：验证文件名和目录名是否符合规范
- `lint-staged`：处理 git 暂存区的文件，一般配和 pre-commit 做对应脚本的执行，如 `eslint --fix`
- `@changesets/cli`：Changesets 是一个用于 Monorepo 项目下版本以及 Changelog 文件管理的工具

  ```json
  {
    "workspaces": ["packages/*"],
    "scripts": {
      "build": "preconstruct build",
      "build:debug-tools": "pnpm --filter mincu-debug-tools build",
      "dev": "preconstruct dev",
      "dev:debug-tools": "pnpm --filter mincu-debug-tools dev",
      "preinstall": "npx only-allow pnpm",
      "lint": "eslint -f unix \"packages/**/*.{ts,tsx}\"",
      "lint:fix": "npm run lint -- --fix",
      "prepare": "husky install",
      "prettier": "pretty-quick",
      "release": "npm run build:debug-tools && npm run build && lerna publish --no-push",
      "test:example": "ts-node ./tests/run_example_scripts.ts",
      "watch": "preconstruct watch"
    },
    "husky": {
      "hooks": {
        "pre-commit": "pretty-quick --staged"
      }
    },
    "preconstruct": {
      "packages": ["packages/*"]
    }
  }
  ```

## 相关技术博客

- [Changesets: 流行的 monorepo 场景发包工具](https://juejin.cn/post/7024827345059971080)
