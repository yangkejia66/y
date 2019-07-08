import Vue from 'vue'
import VueRouter from "../node_modules/vue-router/dist/vue-router"

Vue.use(VueRouter)
import HeroList from "./view/heros/HeroList.vue"
import Weapons from "./view/weapons/Weapons.vue"
import Equips from './view/equips/Equips.vue'
import HeroAdd from './view/heros/HeroAdd.vue'
import HeroEdit from './view/heros/HeroEdit.vue'
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { name: 'home', path: '/', redirect: 'hero' },
    { name: 'hero', path: '/hero', component: HeroList },
    { name: 'weapons', path: '/weapon', component: Weapons },
    { name: 'equips', path: '/equip', component: Equips },
    {name:'heroadd',path:'/hero/add',component:HeroAdd},
    {name:'heroedit',path:'/hero/edit/:id',component:HeroEdit,props:true}
  ]
})

export default router