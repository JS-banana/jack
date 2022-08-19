<template>
  <Menu class="menu-container" :active-name="activeRoute" @on-select="handleMenuClick">
    <template v-for="item in menuList">
      <Submenu v-if="item.children && item.children.length" :key="item.name" :name="item.name">
        <template #title>
          <span>{{ item?.meta?.title || item.name }}</span>
        </template>
        <MenuItem v-for="subItem in item.children" :key="subItem.name" :name="subItem.path">
          {{ subItem?.meta?.title || subItem.name }}
        </MenuItem>
      </Submenu>
      <MenuItem v-else :key="item.name" :name="item.path">{{ item?.meta?.title || item.name }}</MenuItem>
    </template>
  </Menu>
</template>

<script>
export default {
  name: 'LayoutMenu',
  data: function () {
    return {
      activeRoute: this.$route.path || '/',
      menuList: [],
    }
  },
  mounted() {
    this.initMenu()
  },
  methods: {
    handleMenuClick(name) {
      console.log('name', name)
      this.$router.push(name)
    },
    initMenu() {
      const routes = this.$router.options.routes
      const menuList = []
      const formatMenu = (menu = []) => {
        menu
          .filter(n => n.name)
          .forEach(item => {
            if (item.children && item.children.length) {
              menuList.push({
                ...item,
                path: item.path,
                name: item.name,
                children: item.children.map(route => {
                  return {
                    ...route,
                    path: item.path + '/' + route.path,
                    name: route.name,
                  }
                }),
              })
            } else {
              menuList.push({
                ...item,
                path: item.path,
                name: item.name,
              })
            }
          })
      }
      formatMenu(routes)
      this.menuList = menuList
    },
  },
}
</script>

<style lang="less" scoped>
.menu-container {
  width: 180px;
  height: 100vh;
}
</style>
