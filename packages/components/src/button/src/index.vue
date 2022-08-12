<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
<script>
const prefixCls = 'ah-btn'

export default {
  name: 'AhButton',
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
  methods: {
    getComputedStyle() {
      // test
    },
  },
}
</script>
<style scoped>
.ah-btn {
  color: red;
}
</style>
