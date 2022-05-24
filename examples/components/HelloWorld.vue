<template>
  <div class="hello">
    <h3>Installed CLI Plugins<span class="testSpan">sdfsdfsf</span></h3>
    <div class="box"><ck-button type="primary" @click="testClick">基本按钮</ck-button></div>
    <div class="box"><ck-button type="danger">危险按钮</ck-button></div>
    <div class="box"><ck-button type="warning">警告按钮</ck-button></div>
    <div class="box"><ck-button type="info">信息按钮</ck-button></div>

  </div>
</template>

<script>
import {ckButton} from 'zmjUI'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    ckButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.testSpan {
  font-size: 20px;
  color: red;
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
