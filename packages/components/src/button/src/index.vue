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
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-disbaled`]: this.disbaled,
          ['success']: this.type === 'success',
          ['large']: this.size === 'large',
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
<style scoped lang="less">
@success-color: #19be6b;
@default-color: #fff;

.ah-btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.5;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  transition: color 0.2s linear, background-color 0.2s linear, border 0.2s linear, box-shadow 0.2s linear;
  color: #515a6e;
  background-color: #fff;
  border-color: #dcdee2;
  &.large {
    height: 40px;
    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
  }
  &:hover {
    color: tint(#000, 20%);
    background: fade(tint(@default-color, 95%), 50%);
  }

  &.success {
    color: #fff;
    background-color: @success-color;
    border-color: @success-color;
    &:hover {
      color: tint(@success-color, 20%);
      background: fade(tint(@success-color, 95%), 50%);
    }
  }
}
</style>
