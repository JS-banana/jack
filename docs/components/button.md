---
sidebarDepth: 1
---

## 按钮类型

::: demo

```html
<template>
  <Button>Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="text">Text</Button>
  <Button type="info">Info</Button>
  <Button type="success">Success</Button>
  <Button type="warning">Warning</Button>
  <Button type="error">Error</Button>
</template>
```

:::

## 不可用状态

::: demo

```vue
<template>
  <Button>Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="dashed">Dashed</Button>
  <Button type="text">Text</Button>
  <br><br>
  <Button disabled>Default(Disabled)</Button>
  <Button type="primary" disabled>Primary(Disabled)</Button>
  <Button type="dashed" disabled>Dashed(Disabled)</Button>
  <Button type="text" disabled>Text(Disabled)</Button>
</template>
```

:::

## 按钮尺寸

::: demo

```vue
<template>
    <div>
        <RadioGroup v-model="buttonSize" type="button">
            <Radio label="large">Large</Radio>
            <Radio label="default">Default</Radio>
            <Radio label="small">small</Radio>
        </RadioGroup>
        <br><br>
        <Button :size="buttonSize" type="primary">Primary</Button>
        <Button :size="buttonSize" type="default">Default</Button>
        <Button :size="buttonSize" type="dashed">Dashed</Button>
        <Button :size="buttonSize" type="text">Text</Button>
        <br><br>
        <Button :size="buttonSize" icon="ios-download-outline" type="primary" shape="circle"></Button>
        <Button :size="buttonSize" icon="ios-download-outline" type="primary">Download</Button>
        <br><br>
        <ButtonGroup :size="buttonSize">
            <Button :size="buttonSize" type="primary">
                <Icon type="ios-arrow-back" />
                Backward
            </Button>
            <Button :size="buttonSize" type="primary">
                Forward
                <Icon type="ios-arrow-forward" />
            </Button>
        </ButtonGroup>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                buttonSize: 'large'
            }
        },
    }
</script>
```

:::

## 测试

自定义的基础组件

::: demo

```vue
<template>
  <ah-button>Default</ah-button>
</template>
```

:::

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`。

按钮的属性说明如下：

| 属性     | 说明                                                                                                                                 | 类型                                                              | 默认值    | 版本  |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- | --------- | ----- |
| block    | 将按钮宽度调整为其父宽度的选项                                                                                                       | boolean                                                           | `false`   |       |
| danger   | 设置危险按钮                                                                                                                         | boolean                                                           | `false`   | 2.2.0 |
| disabled | 按钮失效状态                                                                                                                         | boolean                                                           | `false`   |       |
| ghost    | 幽灵属性，使按钮背景透明                                                                                                             | boolean                                                           | `false`   |       |
| href     | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致                                                                                | string                                                            | -         |       |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string                                                            | `button`  |       |
| icon     | 设置按钮的图标类型                                                                                                                   | v-slot                                                            | -         |       |
| loading  | 设置按钮载入状态                                                                                                                     | boolean \| { delay: number }                                      | `false`   |       |
| shape    | 设置按钮形状                                                                                                                         | `default` \| `circle` \| `round`                                  | 'default' |       |
| size     | 设置按钮大小                                                                                                                         | `large` \| `middle` \| `small`                                    | `middle`  |       |
| target   | 相当于 a 链接的 target 属性，href 存在时生效                                                                                         | string                                                            | -         |       |
| type     | 设置按钮类型                                                                                                                         | `primary` \| `ghost` \| `dashed` \| `link` \| `text` \| `default` | `default` |       |
