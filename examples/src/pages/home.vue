<template>
  <div class="hello">
    <Card>
      <p>AnButton 组件</p>
      <ah-button>ah-button</ah-button>
    </Card>
    <Divider />
    <Card>
      <ah-proSqlTipTree />
    </Card>
    <router-view />
  </div>
</template>

<script>
import AhProSqlTipTree from '@ah-ailpha/pro-sqltiptree'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    AhProSqlTipTree,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
