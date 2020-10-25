import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../views/Home'
import Test from './../views/Test'
import A from './../views/A'
import B from './../views/B'
import Ivuex from '@/views/Vuex'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // 点击时网址后那个东西
    // 当地址path变成/home时 显示home组件
    path: '/home',
    name:'myHome',
    component: Home,
    children: [
      {
        path: 'a',
        component: A
      },
      {
        path: 'b',
        component: B
      }
    ]
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/vuex',
    component: Ivuex
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
