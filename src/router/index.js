import { createRouter, createWebHistory } from 'vue-router'
import UsinesView from '../views/UsinesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'usines',
      component: UsinesView
    },
    {
      path: '/market',
      name: 'market',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MarketView.vue')
    },
    {
      path: '/storage',
      name: 'storage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StorageView.vue')
    }
  ]
})

export default router
