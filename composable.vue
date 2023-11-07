// 컴포저블이란, 여러 컴포넌트에서 공유할 수 있는 vue.js 함수.
// 컴포저블은 로직을 캡슐화하고 재사용하는데 사용. ( 코드의 재사용성, 관리성을 높임 )
// ex. API 호출, 유효성 검사, 상태 관리 등 공통 로직을 컴포저블로 작성하고 여러 컴포넌트에서 재사용.

import { ref, onMounted } from 'vue'
import axios from 'axios'

export default function useApi(url) {
  const data = ref(null)
  const error = ref(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      data.value = response.data
    } catch (e) {
      error.value = e
    }
  }

  onMounted(fetchData)

  return { data, error, fetchData }
}


// 마우스 이벤트를 추적하는 컴포저블 함수
import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  const updateMouse = e => {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', updateMouse)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMouse)
  })

  return { x, y }
}


// 현재 날짜와 시간을 실시간으로 업데이트
<!-- useDateTime.ts -->
<script setup lang="ts">
import { ref, watchEffect } from 'vue';

  export function useDateTime() {
  const date = ref(new Date());

  watchEffect(() => {
    const timer = setInterval(() => {
      date.value = new Date();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return {
    date,
  };
}
</script>

<!-- MyComponent.vue -->
<script setup lang="ts">
import { useDateTime } from './useDateTime';

const { date } = useDateTime();
</script>

<template>
  <div>
    Current Date and Time: {{ date }}
  </div>
</template>


// 통신을 위한 Composables 예시
<!-- useFetchUser.ts -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useFetchUser(userId: string) {
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);

  onMounted(async () => {
    loading.value = true;
    try {
      const response = await axios.get(`/api/users/${userId}`);
      user.value = response.data;
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  });

  return {
    user,
    loading,
    error,
  };
}
</script>
