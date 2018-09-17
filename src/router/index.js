import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zynr from '@/components/ZZz/zynr'
import nhytb from '@/components/NhyLy/nhytb'
import ggx from '@/components/XgT/ggx'



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
    },
    {
      path:'/ggx',
      name:'ggx',
      component:ggx,
    }
  ]
})
