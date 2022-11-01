import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import { request } from './network/request'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(VueAxios, axios)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios({
  url:'/home/multidata'
}).then(res => {
  console.log(res)
})

axios.all(
  [
    axios(
      {
        url:'/home/multidata'
      }
    ),
    axios(
      {
        url:'/home/data',
        params: {
          type: 'sell',
          page: 4
        }
      }
    )
  ]
).then(res => {
    console.log(res)
})

