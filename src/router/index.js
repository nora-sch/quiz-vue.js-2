import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Singlequizz from '../views/Singlequizz.vue'
import Countries from '../views/Countries.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      //auth:false,
      title:'About'
    }
  },
  {
    path: '/particles',
    name: 'Particles',
    component: () => import( '../views/Particles.vue'),
    meta: {
      title: 'This is Particles'
    }
  },
  {
    path: '/singlequizz',
    name: 'Single quizz',
    component: Singlequizz,
    meta:{
      title:'Single quizz'
    }
  },
  {
    path: '/countries',
    name: 'Countries',
    component: Countries,
    meta:{
      title:'Countries list'
    }
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router




