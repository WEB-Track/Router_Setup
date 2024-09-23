import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'


const routes = [
 { path: '/', name: 'Home', component: Home },
 {
  path: '/destination/:id/:slug',
  name: 'destination.show',
  component: () => import('@/views/DestinationShow.vue'),
  props: route => ({ ...route.params, id: parseInt(route.params.id) }),
  beforeEnter(to, from) {
   const exists = sourceData.destinations.find(
    destination => destination.id === parseInt(to.params.id),
   )
   if (!exists) return { name: 'NotFound' }
  },
  children: [
   {
    path: ':experienceSlug',
    name: 'experience.show',
    component: () => import('@/views/ExperienceShow.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) })
   }
  ]
 },
 {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () => import('@/views/NotFound.vue')
 }
]

const router = createRouter({
 history: createWebHistory(),
 routes,
 linkActiveClass: 'vue-school-active-link'
})
export default router