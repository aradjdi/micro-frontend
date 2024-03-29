import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  base: 'about',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
