<template>
  <div>
    <h2>iview button组件</h2>
    <Card>
      <Base />
      <br />
      <Disable />
      <br />
      <Ghost />
    </Card>
  </div>
</template>

<script>
import Base from './base.vue'
import Disable from './disabled.vue'
import Ghost from './ghost.vue'
export default {
  name: 'DemoAhButton',
  title: 'Button 按钮',
  components: {
    Base,
    Disable,
    Ghost,
  },
}
</script>
