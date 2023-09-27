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


// 동적 세그먼트 값을 컴포넌트에서 사용
// views/UserProfile.vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const username = ref(route.params.username);

onMounted(() => {
  // API 호출 등의 로직
});
</script>

<template>
  <div>
    <h1>{{ username }}'s Profile</h1>
  </div>
</template>

// views/ProductDetail.vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref(Number(route.params.id));

onMounted(() => {
  // 상품 정보 API 호출 등
});
</script>

<template>
  <div>
    <h1>Product ID: {{ id }}</h1>
  </div>
</template>
