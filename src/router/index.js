import Vue from 'vue'
import Router from 'vue-router'
import SliderContainer from '@/components/SliderContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SliderContainer',
      component: SliderContainer
    }
  ]
})
