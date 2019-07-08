import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/assets/css/index.css"
import VueRouter from "../node_modules/vue-router/dist/vue-router"

Vue.use(VueRouter)
import HeroList from "./view/heros/HeroList.vue"
import Weapons from "./view/weapons/Weapons.vue"
import Equips from './view/equips/Equips.vue'
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { name: 'home', path: '/', redirect: 'hero' },
    { name: 'hero', path: '/hero', component: HeroList },
    { name: 'weapons', path: '/weapon', component: Weapons },
    { name: 'equips', path: '/equip', component: Equips }
  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
