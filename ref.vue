// ref는 단일 값에 대한 반응성을 만듦, 기본형 값들을 직접 추적 가능.
// ref는 .value를 통해 값을 접근, 변경 가능.
// 단, ref로 객체를 감싸면 중첩된 속성은 반응형이 아님.
import { ref } from 'vue';

const count = ref(0); // 초기값 0

// 템플릿에서 사용
// {{ count.value }}

// 스크립트에서 사용
count.value++; // 값 증가


// reactive는 중첩된 객체까지 객체 전체를 반응형으로 만듦.
// 
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


// 원시 값이나 단일 값에는 ref를, 복잡한 객체 상태에는 reactive를 사용.
