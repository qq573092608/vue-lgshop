<template>
  <div class="shop">
    購物000000000

  <button @click="gotoComponentB">跳转到B页面</button>


    <!-- <ol>
      <li v-for="(step, index) in steps" :key="index" v-bind:class="{ 'completed': index < currentStep }">
       {{ step }}
      </li>
    </ol>
    <button v-if="currentStep < steps.length" @click="nextStep">Next Step</button>
    <div class="aaa" :style="{ background: 'radial-gradient(red 30%, blue 70%), radial-gradient(circle at 50% 0%, white, white), radial-gradient(circle at 50% 100%, white, white)' }">
    </div>

    <select v-model="selectedOption">
      <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
    </select>
    <p>You selected: {{ selectedOption }}</p> -->

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
      steps: ['Step 1', 'Step 2', 'Step 3'],
      selectedOption: null,
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ]
    }
},
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
     nextStep() {
       this.currentStep++
    },
    gotoComponentB() {
      this.$router.push('/componentb');
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
