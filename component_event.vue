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
