// Vue3에서 suspense 는 비동기 컴포넌트의 로딩 상태를 처리하고, 
// 해당 컴포넌트가 로드될 때까지 대체 컨텐츠를 보여주는 기능을 제공

<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>로딩 중...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const AsyncComponent = defineAsyncComponent(() =>
  import('./components/MyAsyncComponent.vue')
);
</script>


//
<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>로딩 중...</div>
    </template>
    <template #error="{ error }">
      <div>에러 발생: {{ error.message }}</div>
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const AsyncComponent = defineAsyncComponent({
  loader: () => import('./components/MyAsyncComponent.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200, // 지연 시간(밀리초) 후 로딩 컴포넌트 표시
  timeout: 3000, // 타임아웃 시간(밀리초) 후 에러 컴포넌트 표시
  onError(error, retry, fail, attempts) {
    if (error.message === '특정 에러 메시지' && attempts <= 3) {
      retry();
    } else {
      fail();
    }
  },
});
</script>
