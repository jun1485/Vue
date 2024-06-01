// 부모 컴포넌트 
<template>
  <div>
    <BrotherComponentA @updateData="handleUpdate" />
    <BrotherComponentB :sharedData="sharedData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BrotherComponentA from './BrotherComponentA.vue';
import BrotherComponentB from './BrotherComponentB.vue';

const sharedData = ref('');

const handleUpdate = (data: string) => {
  sharedData.value = data;
};
</script>

<style scoped>
/* Tailwind CSS styles */
</style>
