// ref는 단일 값에 대한 반응성을 만듦, 기본형 값들을 직접 추적 가능.
import { ref } from 'vue';

const count = ref(0); // 초기값 0

// 템플릿에서 사용
// {{ count.value }}

// 스크립트에서 사용
count.value++; // 값 증가

import { reactive } from 'vue';

const state = reactive({
  count: 0,
  info: {
    name: 'Vue'
  }
});

// 템플릿에서 사용
// {{ state.count }}
// {{ state.info.name }}

// 스크립트에서 사용
state.count++; // 값 증가
state.info.name = 'Vue 3'; // 중첩된 값 변경
