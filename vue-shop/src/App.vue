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
import {chunk} from 'lodash-es'


export default {
  name: 'App',
  data(){
    return {
      productId:'6676',
      testPromise: new Promise((resole, reject) => {
        setTimeout(() => {
          resole('Hellow World!!')
        }, 2000);
      })
    }
  },
  async created(){
    let res = await this.testPromise
  },
  mounted(){
    this.testAwait()
    // loadsh常用函数
   this.loadsh()

  },
  methods: {
    loadsh () {
       const list = chunk(['a', 'b', 'c', 'd'], 2)
       console.log(list[0])
    },
    productClick(){
      this.$router.push('/product')
    },
    orderClick(){
      this.$router.push('/order')
    },
    async testAwait(){
     let result = await this.testPromise
    },
  },
  components: {
    Tabbar
  }
}
</script>

<style>

</style>

<style lang="scss"  scoped>
// 注意路径后面的分号不能少啊啊啊啊啊
// @import "~@/assets/scss/_variable.scss";
@import "~@/assets/scss/base.scss";

.box {
  display: flex;
  background: $theme-color;
  justify-content: space-around;
}
.router-link-active {
  color: #f00;
}
</style>
