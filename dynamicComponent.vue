<!-- ComponentA.vue -->
<template>
  <div>
    <p>This is Component A</p>
    <p>{{ someProp }}</p>
    <button @click="emitEvent">Emit Event</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ someProp: string }>();
const emit = defineEmits(['customEvent']);

const emitEvent = () => {
  emit('customEvent', 'Event from Component A');
};
</script>
