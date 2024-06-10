import { createRouter, createWebHistory } from 'vue-router';
import MHome from '../views/MHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MHome
    },
  ]
});

export default router;
