import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index',
      wrappers: [
        '@/pages/privateRoute.js',
      ]
    },
    { path: '/login', component: '@/pages/login' },
  ],
  dva: {
    immer: true
  },
  fastRefresh: {},
});
