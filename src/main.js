import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/assets/css/index.css"
import router from './router'
import axios from 'axios'
axios.defaults.auth='http://localhost:3000/'
Vue.prototype.axios = axios
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
