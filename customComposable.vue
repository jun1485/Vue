// useCounter.ts
import { ref } from 'vue';

export default function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  
  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return {
    count,
    increment,
    decrement
  };
}


// useFetch.ts
import { ref, Ref } from 'vue';

interface FetchState<T> {
  data: Ref<T | null>;
  isLoading: Ref<boolean>;
  error: Ref<any>;
}

export default function useFetch<T>(url: string): FetchState<T> {
  const data = ref<T | null>(null);
  const isLoading = ref<boolean>(true);
  const error = ref<any>(null);

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      data.value = result;
      isLoading.value = false;
    })
    .catch((err) => {
      error.value = err;
      isLoading.value = false;
    });

  return {
    data,
    isLoading,
    error
  };
}

<script setup lang="ts">
import useFetch from '@/composables/useFetch';

const { data, isLoading, error } = useFetch<{ name: string; }>('https://api.example.com/data');
</script>

<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      Name: {{ data?.name }}
    </div>
  </div>
</template>
