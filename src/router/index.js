import Vue from 'vue'
import Router from 'vue-router'
import list from '../page/list'
import content from '../page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/content',
      name: 'content',
      component: content
    }
  ]
})
