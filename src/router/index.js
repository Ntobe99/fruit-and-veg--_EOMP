import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  },
  {
    path: '/products',
    name: 'products',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/register',
    name: 'register',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/updateP',
    name: 'updateP',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/updateProductView.vue')
  },
  {path:'/singleProduct' ,
   name:'singleProduct',
   component: () => import(/* webpackChunkName: "about" */ '../views/singleProductView.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
