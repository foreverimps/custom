import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';

import Welcome from '@/pages/Welcome';
import Home from '@/pages/Home';
import List from '@/pages/List';
import Custom from '@/pages/Custom';
import Detail from '@/pages/Detail';
import Orders from '@/pages/Orders';
import ExtraData from '@/pages/ExtraData';
import Service from '@/pages/Service';
import Preview from '@/pages/Preview';

Vue.use(Router);

const router = new Router({
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
      path: '/welcome',
      name: 'welcome',
      component: Welcome
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
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/extra-data',
      name: 'extraData',
      component: ExtraData
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    }
  ]
});

export default router;
