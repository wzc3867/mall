import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => {import('../views/home/home.vue')}
const category = () => {import('../views/category/category.vue')}
const profile = () => {import('../views/profile/profile.vue')}
const cart = () => {import('../views/cart/cart.vue')}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/cart',
    component: cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
