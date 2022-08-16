---
title: 简单介绍
---

## 介绍

这是我们业务部门在实际开发过程中提炼封装的一些组件，是经历过多轮版本迭代和检验的，稳定性可以保证，接下来也会在实际业务中不断迭代更新完善。

</br>

目前我们的组件主要包括可复性较高的业务组件以及一些通用功能组件。其主要依赖于`iview`基础组件和`lodash`工具库，部分特殊业务有使用到`monaco-editor`、`codemirror`等。

## 如何使用组件

::: tip

因为涉及到保密性质，npm 主要发布在内网环境，注意相关地址无误。

:::

为了方便维护以及支持用户按需使用，各组件通过**Monorepo**多包管理的方式进行发布，普通组件统一发布在`@an-ailpha/components`名下，按需引入，高级组件独立发布为一个 npm 包`@ah-ailpha/pro-sqltiptree`。

</br>

示例如下：

```js
// 普通组件
import { Button } from '@an-ailpha/components'
// 高级组件
import ProSqlTipTree from '@ah-ailpha/por-sqltiptree'
```

## 安装

根据项目需要，安装需对应的组件类型。

```sh
# npm
npm install @an-ailpha/components
npm install @ah-ailpha/pro-sqltiptree

# yarn
yarn add @an-ailpha/components
yarn add @ah-ailpha/pro-sqltiptree
```

## 使用

1. 入口统一引入注册，全局使用：

   ```js
   import { Button } from '@an-ailpha/components'
   import ProSqlTipTree from '@ah-ailpha/pro-sqltiptree'

   Vue.use(Button)
   Vue.use(ProSqlTipTree)
   ```

2. 在任意组件中单独引入使用：

   ```vue
   <template>
     <div>
       <ah-button>按钮</ah-button>
       <ProSqlTipTree></ProSqlTipTree>
     </div>
   </template>

   <script>
   import { Button } from '@an-ailpha/components'
   import ProSqlTipTree from '@ah-ailpha/pro-sqltiptree'
   export default {
     components: {
       AhButton: Button,
       ProSqlTipTree,
     },
   }
   </script>
   ```
