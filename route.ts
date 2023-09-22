// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import UserProfile from '../views/UserProfile.vue';
import ProductDetail from '../views/ProductDetail.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/user/:username',
    name: 'UserProfile',
    component: UserProfile,
    props: route => ({ username: route.params.username })
  },

  const router = createRouter({
  history: createWebHistory(),
  routes
]
