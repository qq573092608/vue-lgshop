<template>
  <div class="tabbarItem" @click="tabbarClick">
    <div v-if='isActive' :style="activeStyle" class="tabbarIcon"><slot name="tabIconActive"></slot></div>
    <div class="tabbarIcon" v-else> <slot name="tabIcon"></slot></div>
    <div :style='activeStyle'>
        <slot name="tabName"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path:String,
    activeColor:{
      type:String,
      default:'deepPink'
    }
  },
  data () {
    return {}
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
        return 'color:' + (this.isActive ? this.activeColor : 'gray')
    }
  },
  watch: {},
  created () {},
  mounted () {},
  methods: {
    tabbarClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped lang="scss">

.tabbarIcon {
  width: 22px;
  height: 22px;
  text-align: center;
  margin:auto;
}
.tabbarItem {
    flex:1;
}

</style>
