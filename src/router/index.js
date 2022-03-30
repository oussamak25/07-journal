import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

//importamos el archivo router del modulo de daybook para usarlo de manera mas facil ya que el nos devuelve un objeto con todos
//los valores que necesitamos
import dayBooRouter from '@/modulos/daybook/router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/daybook',
    //de la siguiente manera accedemos al obejto importado arriba y podemos usar las rutas de
    //del modulo de daybook
    //operador sprite 
    ...dayBooRouter
  
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
