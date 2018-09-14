import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zynr from '@/components/ZZz/zynr'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zynr',
      component: zynr
    },
  ]
})
