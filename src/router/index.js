import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView.vue'
import EventView from '@/components/Home/EventView.vue'
import KeyBroad from '@/components/Home/KeybroadEvent.vue'
import DataBinding from '@/components/Home/DataBindingView.vue'
import ComputedProperties from '@/components/Home/ComputedProperties.vue'
import Dynamic from '@/components/Home/DynamicCssClasses.vue'
import Contionals from '@/components/Home/Conditionals.vue'
import Loop from '@/components/Home/LoopingVfor.vue'
import Game from '@/components/Home/PunchBagGame.vue'
import Multiple from '@/components/Home/MultipleView.vue'
import Refs from '@/components/Home/RefsView.vue'
import Nesting from '@/components/Home/NestingComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/event',
      name: "event",
      component: EventView
    },
    {
      path: '/key',
      name: "key",
      component: KeyBroad
    },
    {
      path: '/binding',
      name: "binding",
      component: DataBinding
    },
    {
      path: '/computed',
      name: "Computed",
      component: ComputedProperties
    },
    {
      path: '/dynamic',
      name: "Dynamic",
      component: Dynamic
    },
    {
      path: '/contionals',
      name: "Contionals",
      component: Contionals
    },
    {
      path: '/loop',
      name: "Loop",
      component: Loop
    },
    {
      path: '/game',
      name: "Game",
      component: Game
    },
    {
      path: '/multiple',
      name: "Multiple",
      component: Multiple
    },
    {
      path: '/refs',
      name: "Refs",
      component: Refs
    },
    {
      path: '/nesting',
      name: "Nesting Component",
      component: Nesting
    },
  ]
})
