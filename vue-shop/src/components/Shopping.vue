<template>
  <div class="shop">購物000000000
    <ol>
     <li v-for="(step, index) in steps" :key="index" v-bind:class="{ 'completed': index < currentStep }">
       {{ step }}
    </li>
  </ol>
  <button v-if="currentStep < steps.length" @click="nextStep">Next Step</button>
  <div class="aaa" :style="{ background: 'radial-gradient(red 30%, blue 70%), radial-gradient(circle at 50% 0%, white, white), radial-gradient(circle at 50% 100%, white, white)' }">
  </div>

  </div>
</template>

<script>
export default {
  name: 'Shopping',
  components: {},
  props: {},
  data() {
    return {
      currentStep: 1,
      steps: ['Step 1', 'Step 2', 'Step 3']
    }
},
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
     nextStep() {
       this.currentStep++
    }
  }
}
</script>

<style scoped lang="scss">
.shop {
  // background: #000;
  li::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: pink;
    position: relative;
    top: -5px;
  }
  .completed {
        background-color: blue;

  }
  .aaa {
    width: 300px;
    height: 300px;
  }
}



</style>
