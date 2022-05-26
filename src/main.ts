import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import ColumnDetail from '@/views/ColumnDetail.vue'
import store from '@/store'
import CreatePost from '@/views/CreatePost.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/colum/:id',
      name: 'colum',
      component: ColumnDetail
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePost
    }
  ]
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
