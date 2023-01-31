<template>
  <div class="main-order">訂單
     <div class="wl_move_a"></div>
     <div class="wl_move_b"></div>
  </div>
</template>

<script>
export default {
  name: 'Order',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">

.main-order {
  background-color: #999;
  position:relative;
  width:1200px;
  height:300px;
  margin:0 auto;
  .wl_move_a {
    animation: snowmove_a 13s 13s linear infinite;
    position: absolute;        
    top: -100%;
    left: 0;
    background: url("@/assets/img/snow.png") center center no-repeat;
    background-size: 1200px;
    height: 100%;
    width: 1200px;
    z-index: 0;
  }

  @keyframes snowmove_a {
    from {
        top: -100%;
        left: 0
    }
    to {
        top: 100%;
        left: -200px;
    }
  }

    .wl_move_b {
      animation: snowmove_b 13s linear infinite;
      position: absolute;        
      top: 0%;
      left: 0;
      background: url("@/assets/img/snow.png") center center no-repeat;
      background-size: 1200px;
      height: 100%;
      width: 1200px;
      z-index: 0;
    }

    @keyframes snowmove_b {
        from {
            top: -100%;
            left: 0
        }
        to {
            top: 100%;
            left: 200px;
        }
    }

}


</style>
