<template>
  <input :class="classes" />
</template>
<script>
const prefixCls = 'ah-select'

export default {
  name: 'AhSelect',
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
<style scoped>
.ah-select {
  color: red;
  border: 1px solid red;
  padding: 4px 8px;
}
</style>
