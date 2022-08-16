---
sidebarDepth: 1
---

## 描述

智能语法提示器

## 使用

::: demo

```vue
<template>
  <ah-proSqlTipTree>AhProSqlTipTree组件</ah-proSqlTipTree>
</template>
```

:::

### 引入

```vue
<template>
  <ah-proSqlTipTree></ah-proSqlTipTree>
</template>

<script>
import AhProSqlTipTree from '@an-ailpha/pro-sqltiptree'
export default {
  components: {
    AhProSqlTipTree,
  },
}
</script>
```

## API

| 参数         | 说明           | 类型      | 默认值 |
| ------------ | -------------- | --------- | ------ |
| propsIsFlink | 是否模型或指标 | `Boolean` | false  |
| propsDisable | 设置 readonly  | `Boolean` | false  |

---

| 事件名              | 说明     | 参数 |
| ------------------- | -------- | ---- |
| @on-tree-icon-click | 展示弹窗 |      |
