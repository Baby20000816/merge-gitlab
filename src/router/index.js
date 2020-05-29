import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import HomePage from '../views/home/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/homepage',
    children: [
      {
        path: 'homepage',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('../views/message/Message.vue')
      },
      {
        path: '/address',
        name: 'Address',
        component: () => import('../views/home/Address.vue')
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('../views/message/Message.vue')
      },
      {
        path: '/mes',
        name: 'Mes',
        component: () => import('../views/mes/Mes.vue')
      },
      {
        path: '/personal',
        name: 'Personal',
        component: () => import('../views/personal/Personal.vue')
      },
      {
        //课程表
        path: '/classSchedule',
        name: 'ClassSchedule',
        component: () => import('../views/home/ClassSchedule.vue')
      },
      {
        // 考务查询
        path: '/examination',
        name: 'Examination',
        component: () => import('../views/home/Examination.vue')
      },
      {
        // 图书馆
        path: '/library',
        name: 'Library',
        component: () => import('../views/home/Library.vue')
      },
      {
        // 一卡通
        path: '/ecard',
        name: 'ecard',
        component: () => import('../views/ecard/ECard.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/login/Register.vue')
  },

  {
    path: '/aboutus',
    name: 'AboutUs',
    component: () => import('../views/personal/AboutUs.vue')
  },

  {
    path: '/clear',
    name: 'Clear',
    component: () => import('../views/personal/Clear.vue')
  },

  {
    path: '/information',
    name: 'Information',
    component: () => import('../views/personal/Information.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
