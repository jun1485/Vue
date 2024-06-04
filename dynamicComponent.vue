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


// 형제 컴포넌트 A
<template>
  <div>
    <input v-model="data" @input="emitData" placeholder="Enter data" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const data = ref('');
const emit = defineEmits(['updateData']);

const emitData = () => {
  emit('updateData', data.value);
};
</script>


// 형제 컴포넌트 B
<template>
  <div>
    <p>Shared Data: {{ sharedData }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ sharedData: string }>();
</script>
