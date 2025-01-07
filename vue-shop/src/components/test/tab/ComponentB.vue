<template>
  <div>
    <child ref="child"></child>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: {
    'child': Child
  },
  mounted() {
    this.$nextTick(() => {
      const tabEl = this.$refs.child.$el.querySelector('.tab:nth-child(2)');
      if (tabEl) {
        const offsetTop = tabEl.getBoundingClientRect().top + window.pageYOffset;
        const scrollTop = offsetTop - (window.innerHeight / 2) + (tabEl.clientHeight / 2);
        window.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
      }
    });
  }
}
</script>
