<template>
  <div>
    <h2>组件：Pro-SqlTipTree</h2>
    <ah-proSqlTipTree />
  </div>
</template>
<script>
import AhProSqlTipTree from '@ah-ailpha/pro-sqltiptree'
export default {
  props: {
    msg: String,
  },
  components: {
    AhProSqlTipTree,
  },
}
</script>
