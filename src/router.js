import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import ListDevices from './components/ListDevices'
import Register from './components/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/list-devices',
      name: 'list-devices',
      component: ListDevices
    }
  ]
})
