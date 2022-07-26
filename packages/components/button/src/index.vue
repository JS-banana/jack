<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
<script>
const prefixCls = 'ah-btn'

export default {
  name: 'Button',
  data() {},
  props: {
    disbaled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disbaled`]: this.disbaled,
        },
      ]
    },
  },
}
</script>
