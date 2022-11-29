import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueAxios, axios)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


