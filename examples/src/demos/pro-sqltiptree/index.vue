<template>
  <div>
    <h2>组件：Pro-SqlTipTree</h2>
    <ah-proSqlTipTree />
  </div>
</template>
<script>
import AhProSqlTipTree from '@ah-ailpha/pro-sqltiptree'
export default {
  name: 'Demo-AhProSqlTipTree',
  title: 'SqlTipTree 提示器',
  props: {
    msg: String,
  },
  components: {
    AhProSqlTipTree,
  },
}
</script>
