import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zynr from '@/components/ZZz/zynr'
import nhytb from '@/components/NhyLy/nhytb'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zynr',
      component: zynr
    },
    {
      path:'/nhy',
      name:'nhytb',
      component:nhytb,
    }
  ]
})
