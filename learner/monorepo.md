# monorepo 相关内容整理

- `@lerna-lite/cli`：lerna 的轻量包
- `concurrently`：多脚本运行工具
- `@preconstruct/cli`：在monorepos中无痛苦地开发和构建你的代码
- `pretty-quick`、`husky`、`pre-commit`

    ```json
    {
      "workspaces": [
        "packages/*"
      ],
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
        "packages": [
          "packages/*"
        ]
      }
    }
    ```
