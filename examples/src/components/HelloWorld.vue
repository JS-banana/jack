<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <hr/> -->
    <Button>默认</Button>
    <Button type="primary">按钮</Button>
    <hr />
    <ah-button>ah-button</ah-button>
    <hr />
    <!-- <ah-proSqlTipTree></ah-proSqlTipTree> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
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
