import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GridView from '../views/GridView.vue'
import ButtonsView from '../views/ButtonsView.vue'
import CardsView from '../views/CardsView.vue'
import TasksView from '../views/TasksView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
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
    path: '/grid',
    name: 'Grid',
    component: GridView
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: ButtonsView
  },
  {
    path: '/cards',
    name: 'Cards',
    component: CardsView
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
