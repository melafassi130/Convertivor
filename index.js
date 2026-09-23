import { createRouter, createWebHistory } from 'vue-router'

import Centimetros from "../components/Centimetros.vue"
import Gramos from "../components/Gramos.vue"
import Kilometros from "../components/Kilometros.vue"
import Milimetros from "../components/Milimetros.vue"
import Litros from "../components/Litros.vue"


const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/kilometros',
      component: Kilometros
    },
    {
      path: '/gramos',
      component: Gramos
    },
    {
      path: '/centimetros',
      component: Centimetros
    },
    {
      path: '/litros',
      component: Litros
    },
    {
      path: '/milimetros',
      component: Milimetros
    }
  ]
})

export default router