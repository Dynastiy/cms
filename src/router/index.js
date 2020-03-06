import Vue from 'vue'
import Router from 'vue-router'

import addBet from '../components/Views/addBet.vue'





Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: addBet},
  ]
})