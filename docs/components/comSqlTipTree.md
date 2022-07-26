---
sidebarDepth: 1
---

## 描述

智能语法提示器

## 使用

### 引入

```vue
<template>
  <ComSqlTipTree></ComSqlTipTree>
</template>

<script>
import { ComSqlTipTree } from '@an-ailpha/components'
export default {
  components: {
    ComSqlTipTree
  },
}
</script>
```

## API

| 参数         | 说明           | 类型      | 默认值 |
| ------------ | -------------- | --------- | ------ |
| propsIsFlink | 是否模型或指标 | `Boolean` | false  |
| propsDisable | 设置readonly   | `Boolean` | false  |

---

| 事件名              | 说明     | 参数 |
| ------------------- | -------- | ---- |
| @on-tree-icon-click | 展示弹窗 |      |
