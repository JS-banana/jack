---
title: 如何使用
---

## 如何使用

在使用方式上应该和使用 npm 包一样

### 安装

```bash
# 基础组件
npm i --save @ah-ailpha/components
# 高级组件
npm i --save @ah-ailpha/pro-sqltiptree
```

### 注册

如果使用 Vue 默认的模板语法，需要注册组件后方可使用，有如下三种方式注册组件：

**全局完整注册**

```js
import AhComponents from '@ah-ailpha/components'
import AhProSqlTipTree from '@ah-ailpha/pro-sqltiptree'

app.use(AhComponents).use(AhProSqlTipTree)
```

**全局部分注册**

```js
import { Button } from '@ah-ailpha/components'

app.use(Button)
```

**局部注册组件**

```html
<template>
  <ah-button type="primary">Primary Button</ah-button>
  <ah-proSqlTipTree>AhProSqlTipTree组件</ah-proSqlTipTree>
</template>
<script>
  import { Button } from 'ant-design-vue'
  import ProSqlTipTree from '@ah-ailpha/pro-sqltiptree'
  // import AhProSqlTipTree from '@ah-ailpha/pro-sqltiptree'

  export default {
    components: {
      AhButton: Button,
      AhProSqlTipTree: ProSqlTipTree,
      // AhProSqlTipTree
    },
  }
</script>
```

局部注册组件需要保证组件命名空间符合约定规则，即 `Ah`为前缀，因为该场景下是手动自行注册，组件`name`不可控，不同于全局`Vue.use`会自动使用定义的`name`完成注册。
