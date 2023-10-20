// 프로젝트 구조

src/
|-- components/
|   |-- UserList.vue
|   |-- UserProfile.vue
|   |-- UserPosts.vue
|   |-- SinglePost.vue
|
|-- views/
|   |-- Users.vue
|   |-- User.vue
|
|-- routes/
|   |-- index.ts
|
|-- App.vue
|-- main.ts

// routes/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Users from '@/views/Users.vue';
import User from '@/views/User.vue';

const routes = [
  {
    path: '/users',
    component: Users,
    children: [
      {
        path: ':id',
        component: User,
        props: true,
        children: [
          {
            path: 'posts',
            component: () => import('@/components/UserPosts.vue'),
            props: true
          },
          {
            path: 'posts/:postId',
            component: () => import('@/components/SinglePost.vue'),
            props: true
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


// views/Users.vue
<template>
  <div>
    <h1>Users</h1>
    <UserList />
  </div>
</template>

<script setup lang="ts">
import UserList from '@/components/UserList.vue';
</script>


// views/User.vue
<template>
  <div>
    <UserProfile :id="id" />
    <router-view :id="id" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import UserProfile from '@/components/UserProfile.vue';

const route = useRoute();
const id = ref(route.params.id);
</script>

