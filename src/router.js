import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import ListDevices from './components/ListDevices'
import Register from './components/Register.vue'
import TriggersList from './components/TriggersList'
import ScriptsList from './components/ScriptsList'
import ScriptEditor from './components/ScriptEditor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
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
    },
    {
      path: '/triggers-list',
      name: 'triggers-list',
      component: TriggersList
    },
    {
      path: '/scripts-list',
      name: 'scripts-list',
      component: ScriptsList
    },
    {
      path: '/script-editor',
      name: 'script-editor',
      component: ScriptEditor
    }
  ]
})
