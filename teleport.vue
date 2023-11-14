// 컴포넌트의 마크업을 다른 위치의 DOM으로 '이동'시키는 기능
// 렌더링 위치와 실제 DOM 트리에서의 위치 분리 가능.

// 모달, 알림, 팝업 등의 UI요소를 body태그 아래 또는 다른 DOM 요소로 이동
// z-index 스태킹 컨텍스트, overflow:hidden 등 CSS문제를 우회하고 싶을 때

<teleport to="#end-of-body">    // "to" prop을 이용하여 대상 요소(CSS 셀렉터, DOM 요소)를 지정.
  <div>I will be rendered at the end of body tag!</div>
</teleport>


<template>
  <button @click="modalOpen = true">모달 열기</button>
  <Teleport to="body">      // <Teleport to="body">는 모달의 HTML을 <body> 태그 끝으로 옮겨줌.
    <div v-if="modalOpen">
      <!-- 모달 내용 -->
      <button @click="modalOpen = false">닫기</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalOpen = ref(false);
</script>

// 반응성: Teleport의 to 속성은 반응성을 가지고 있어서, 그 값이 바뀌면 내용이 다른 위치로 옮겨짐.
