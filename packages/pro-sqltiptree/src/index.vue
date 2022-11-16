<template>
  <div :class="classes">
    <Card title="AhProSqlTipTree 组件" style="width: 600px">
      <Select v-model="model1">
        <Option v-for="item in cityList" :key="item.value" :value="item.value">{{ item.label }}</Option>
      </Select>
    </Card>
  </div>
</template>
<script>
const prefixCls = 'ah-proSqlTipTree'
// 测试版本发布 1.5.0
export default {
  name: 'AhProSqlTipTree',
  props: {
    // 是否模型或指标
    propsIsFlink: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cityList: [
        {
          value: 'New York',
          label: 'New York',
        },
        {
          value: 'London',
          label: 'London',
        },
        {
          value: 'Sydney',
          label: 'Sydney',
        },
        {
          value: 'Ottawa',
          label: 'Ottawa',
        },
        {
          value: 'Paris',
          label: 'Paris',
        },
        {
          value: 'Canberra',
          label: 'Canberra',
        },
      ],
      model1: '',
    }
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
