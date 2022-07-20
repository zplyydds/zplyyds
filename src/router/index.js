import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'index',
    component:  () => import('@/views/Index.vue'),
   /*  children:[
      {
        path: '/sort',
        name: 'sort',
        component:  () => import('@/views/sort.vue'),
      },
    ] */
  },
  {
    path:'/screen',
    name:'screen',
    component:  () => import('@/views/Screen.vue'),
    
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
