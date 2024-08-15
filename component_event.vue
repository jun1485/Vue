<!-- MyComponent.vue -->
<template>
  <button @click="emitEvent">클릭하기</button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits<{
  (e: 'someEvent'): void
}>()

const emitEvent = () => {
  emit('someEvent')
}
</script>

<!-- ParentComponent.vue -->
<template>
  <MyComponent @someEvent="handleSomeEvent" />
</template>

<script setup lang="ts">
import MyComponent from './MyComponent.vue'

const handleSomeEvent = () => {
  console.log('someEvent가 발생했습니다.')
}
</script>

