<template>
  <div :class="classes">
    <h2>ComSqlTipTree</h2>
    <p>这是组件demo测试</p>
  </div>
</template>
<script>
const prefixCls = 'ah-comSqlTipTree'

export default {
  name: 'ComSqlTipTree',
  data() {},
  props: {
    // 是否模型或指标
    propsIsFlink: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-link`]: this.propsIsFlink,
        },
      ]
    },
  },
}
</script>
