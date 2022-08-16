<template>
  <div class="layout-wrap">
    <SideMenu />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue'
export default {
  name: 'BasicLayout',
  components: {
    SideMenu,
  },
}
</script>

<style lang="less" scoped>
.layout-wrap {
  display: flex;
  .container {
    height: 100vh;
    flex: 1;
    padding: 16px;
  }
}
</style>
