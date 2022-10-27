<template>
  <div id="app">
    <div class="test">jjiajijdsa</div>

    <router-link to="/product">商品</router-link>
    <router-link to="/order">訂單</router-link>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss"  scoped>
// 注意路径后面的分号不能少啊啊啊啊啊
// @import "~@/assets/scss/_variable.scss";
.test {
  background: $theme-color;
}

</style>
