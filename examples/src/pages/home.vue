<template>
  <div class="hello">
    <Card title="@ah-ailpha/components 组件测试之 AnButton">
      <ah-button>ah-button</ah-button>
    </Card>
    <Divider />
    <Card title="@ah-ailpha/pro-sqltiptree 组件测试">
      <ah-proSqlTipTree />
    </Card>
    <Divider />
    <Card title="@ah-ailpha/utils 工具库测试">
      <p>{{ passTime }}距现在的已过时间：{{ pass }}</p>
      <p>现在距{{ remainTime }}的剩余时间：{{ remain }}</p>
    </Card>
  </div>
</template>

<script>
import AhProSqlTipTree from '@ah-ailpha/pro-sqltiptree'
import { formatPassTime, formatRemainTime } from '@ah-ailpha/utils'

const passTime = '2022-08-15'
const remainTime = '2022-09-10'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    AhProSqlTipTree,
  },
  data() {
    return {
      passTime,
      remainTime,
      pass: formatPassTime(Date.parse(new Date(passTime))),
      remain: formatRemainTime(remainTime),
    }
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
