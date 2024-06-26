import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import BeatlesView from '../views/BeatlesView.vue';
import PinkFloydView from '../views/PinkFloydView.vue';
import PrinceView from '../views/PrinceView.vue';
import RadioheadView from '../views/RadioheadView.vue';
import StingView from '../views/StingView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/beatles',
      name: 'beatles',
      component: BeatlesView,
    },
    {
      path: '/pink-floyd',
      name: 'pink-floyd',
      component: PinkFloydView,
    },
    {
      path: '/prince',
      name: 'prince',
      component: PrinceView,
    },
    {
      path: '/radiohead',
      name: 'radiohead',
      component: RadioheadView,
    },
    {
      path: '/sting',
      name: 'sting',
      component: StingView,
    },
  ],
});

export default router;
