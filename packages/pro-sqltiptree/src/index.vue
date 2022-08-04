<template>
  <div :class="classes">
    <h2>这是 <code>AhProSqlTipTree</code> 组件的demo测试</h2>
    <!-- <br> -->
    <p>你应该能看到上面的红色文字</p>
  </div>
</template>
<script>
const prefixCls = 'ah-proSqlTipTree'

export default {
  name: 'AhProSqlTipTree',
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
<style scoped>
.ah-proSqlTipTree h2 {
  color: red;
}
</style>
