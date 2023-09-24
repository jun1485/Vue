// router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import UserProfile from '../views/UserProfile.vue';
import ProductDetail from '../views/ProductDetail.vue';

const routes: RouteRecordRaw[] = [
  // :username과 :id는 동적 세그먼트.
  // 이 값들은 라우트가 변경될 때마다 해당 컴포넌트로 전달됨.
  {
    path: '/user/:username',
    name: 'UserProfile',
    component: UserProfile,
    props: route => ({ username: route.params.username })
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: route => ({ id: Number(route.params.id) })
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


// 동적 세그먼트 사용
