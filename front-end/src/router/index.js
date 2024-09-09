import { createRouter, createWebHistory } from 'vue-router'
import CurrentPollView from '../views/CurrentPollView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'currentPoll',
      component: CurrentPollView
    },
    {
      path: '/addpoll',
      name: 'addPoll',
      component: () => import('../views/AddPollView.vue')
    },
    {
      path:'/PreviousPolls',
      name: 'previousPolls',
      component: () => import('../views/PreviousPollsView.vue')
    },
    {
      path: '/:pollId',
      name: 'previousPollResults',
      component: () => import('../views/PreviousPollResultsView.vue')
    },
    {
      path: '/currentResults',
      name: 'currentResults',
      component: () => import('../views/CurrentPollResultsView.vue')
    }
  ]
})

export default router
