import { createRouter, createWebHistory } from 'vue-router';
import MHome from '../views/MHome.vue';
import MCharacters from '../views/MCharacters.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MHome
    },
    {
      path: '/characters',
      name: 'character',
      component: MCharacters
    }
  ]
});

export default router;
