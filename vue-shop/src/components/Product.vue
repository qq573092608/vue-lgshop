<template>
  <div>
    <nav-bar>
      <div slot="center">商品</div>
    </nav-bar>
    <div class="">產品</div>
    <div>{{userId}}</div>

    <router-link :to="'/product/' + userId + '/new'">產品新聞</router-link>
    <router-link :to="'/product/' + userId + '/msg'">產品消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import { queryBanner, queryClassify } from '@/network/product_api/ProductApi.js'

export default {
  name: 'Product',
  components: {
    NavBar
  },
  props: {},
  data () {
    return {
      productList: '',
      bannerImgs: []
    }
  },
  computed: {
    userId(){
      // $route指的是當前活躍路由
      return this.$route.params.productId
    }
  },
  watch: {},
  created () {
    this.getBanners()
    this.getAllClasses()
  },
  mounted () {},
  methods: {
    // 查询banner图片
    async getBanners() {
      let res = await queryBanner()
      this.bannerImgs = res.data.filter(object => object.advertisingPath !== '')
                                .map(object => object.advertisingPath);

    },

    // 查询所有商品分类
    async getAllClasses () {
      let res = await queryClassify()
      console.log('============' + res.data)
    }

  },
  // 記錄上一次離開的位置
  beforeRouteLeave(to, from, next){
    console.log('beforeRouteLeave===' + this.$route.path)
    this.path = this.$route.path
    next()
  },
  // 活躍的時候主動跳轉到上一次記錄的位置
  activated(){
    this.$router.push(this.path)
  },
  // **************activated、deactivated 這兩個函數，只有該組件被保持了狀態使用了keep-alive的時候才有效：切記切記*************
  // 因爲離開了keep-alive函數那組件就被銷毀了，自然這兩個函數就沒有用了
  deactivated(){
    
  }
}
</script>

<style scoped lang="scss"></style>
