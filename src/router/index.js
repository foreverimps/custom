import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import Category from '@/pages/Category';
import List from '@/pages/List';
import Custom from '@/pages/Custom';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/custom',
      name: 'custom',
      component: Custom
    }
  ]
});
