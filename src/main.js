import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/assets/css/index.css"
import VueRouter from "../node_modules/vue-router/dist/vue-router"
Vue.config.productionTip = false
Vue.use(VueRouter)

const appRouter = new VueRouter({
  routes:[

  ]
})
new Vue({
  render: h => h(App),
  router:appRouter
}).$mount('#app')
