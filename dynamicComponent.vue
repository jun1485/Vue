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
