import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'//@的意思？？？？？？？？？？？？？？？？？？？？？？？？

import Ratings from '@/components/ratings'
import Seller from '@/components/seller'
import Goods from '@/components/goods'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
  ]
})
