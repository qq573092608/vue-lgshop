<template>
  <div class="tabbar">
    <tabbar-item :path = "'/product/' + productId">
        <img class="tabbarIcon" slot="tabIconActive" src="~assets/img/tabbar/home_active.svg" />
        <img class="tabbarIcon" slot="tabIcon" src="~assets/img/tabbar/home.svg" />
        <div slot="tabName">產品</div>
    </tabbar-item>
    <tabbar-item path='/shop'>
      <img class="tabbarIcon" slot="tabIconActive" src="~assets/img/tabbar/cart_active.svg" />
        <img class="tabbarIcon" slot="tabIcon" src="~assets/img/tabbar/cart.svg" />
        <div slot="tabName">購物車</div>
    </tabbar-item>
    <tabbar-item path='/order'>
      <img class="tabbarIcon" slot="tabIconActive" src="~assets/img/tabbar/category_active.svg" />
        <img class="tabbarIcon" slot="tabIcon" src="~assets/img/tabbar/category.svg" />
        <div slot="tabName">訂單</div>
    </tabbar-item>
    <tabbar-item path='/about'>
      <img class="tabbarIcon" slot="tabIconActive" src="~assets/img/tabbar/profile_active.svg" />
        <img class="tabbarIcon" slot="tabIcon" src="~assets/img/tabbar/profile.svg" />
        <div slot="tabName">我的</div>
    </tabbar-item>
  </div>
</template>

<script>
import TabbarItem from '@/components/tabbar/TabbarItem.vue'


export default {
  name: 'Tabbar',
  components: {
    TabbarItem
  },
  props: {},
  data () {
    return {
      productId:'9999'
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.tabbar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    color: pink;
}

.tabbarIcon {
  width: 22px;
  height: 22px;
}


</style>
