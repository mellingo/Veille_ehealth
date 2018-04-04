import Vue from 'vue'
import Router from 'vue-router'
import SliderContainer from '@/components/SliderContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SliderContainer',
      component: SliderContainer
    }
  ]
})
