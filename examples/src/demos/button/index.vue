<template>
  <div>
    <Base />
    <Disable />
    <Ghost />
  </div>
</template>

<script>
import Base from './base.vue'
import Disable from './disabled.vue'
import Ghost from './ghost.vue'
export default {
  name: 'button',
  title: 'button 按钮',
  components: {
    Base,
    Disable,
    Ghost,
  },
}
</script>
