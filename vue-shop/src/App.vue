<template>
  <div id="app">
    <!-- <div class="box"> -->
      <!-- <router-link to="/product" tag="button" replace>商品</router-link>
      <router-link to="/order">訂單</router-link> -->
        <!-- <button @click="productClick">商品</button>
        <button @click="orderClick">訂單</button> -->

      <!-- <router-link :to="'/product/'+productId" tag="button" replace>商品</router-link>
      <router-link to="/order">訂單</router-link> -->
      <!-- <router-link to="/shop">購物車</router-link> -->
    <!-- </div> -->

    <keep-alive exclude="Login,About">
      <router-view></router-view>
    </keep-alive>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/Tabbar.vue'

export default {
  name: 'App',
  data(){
    return {
      productId:'6676'
    }
  },
  methods: {
    productClick(){
      this.$router.push('/product')
    },
    orderClick(){
      this.$router.push('/order')
    }
  },
  components: {
    Tabbar
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
.box {
  display: flex;
  background: $theme-color;
  justify-content: space-around;
}
.router-link-active {
  color: #f00;
}
</style>
