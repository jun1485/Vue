 // 하나의 마운트 포인트에서 여러 컴포넌트를 동적 교체
<template>
  <component :is="currentComponent"></component>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const components = {
  compA: defineAsyncComponent(() => import('./ComponentA.vue')),
  compB: defineAsyncComponent(() => import('./ComponentB.vue'))
};

const currentComponent = ref('compA');

// 컴포넌트를 변경하는 메소드 예제
function switchComponent(componentName: string) {
  currentComponent.value = componentName;
}
</script>


// 비동기 컴포넌트는 Vue의 'defineAsyncComponent' 메서드를 사용하여 정의.
// 컴포넌트가 필요할 떄만 서버로부터 로드하도록 하여 초기 로드 시간을 줄여줌.
