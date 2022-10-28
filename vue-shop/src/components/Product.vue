<template>
  <div>
    <div class="">產品</div>
    <div>{{userId}}</div>

    <router-link :to="'/product/' + userId + '/new'">產品新聞</router-link>
    <router-link :to="'/product/' + userId + '/msg'">產品消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Product',
  components: {

  },
  props: {},
  data () {
    return {}
  },
  computed: {
    userId(){
      // $route指的是當前活躍路由
      return this.$route.params.productId
    }
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>
