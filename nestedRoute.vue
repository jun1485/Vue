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
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
