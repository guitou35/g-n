import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import GaleryView from '../views/GaleryView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ceremony',
      name: 'ceremony',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CeremonyView.vue')
    },
    {
      path: '/story',
      name: 'Notre histoire',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/galery',
      name: 'galery',
      component: GaleryView
    }
  ]
})

export default router
