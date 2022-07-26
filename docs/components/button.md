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
