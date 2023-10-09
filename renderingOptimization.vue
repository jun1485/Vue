// key 속성이 없으면, Vue는 기존 DOM 요소를 재사용함.
// 예를 들어, item이 삭제되면 마지막 요소만 DOM에서 제거되고 나머지 요소는 그대로 재사용됨.
// 이로 인해 예상치 못한 사이드 이펙트를 초래.

// key값이 다르면 Vue는 새로운 DOM 요소를 생성 ( key값은 데이터의 ID 등 고유한 값 사용 )
<template>
  <ul>
    <!-- 좋은 예 -->
    <li v-for="item in items" :key="item.id">{{ item.text }}</li>

    <!-- 나쁜 예 -->
    <li v-for="(item, index) in items" :key="index">{{ item.text }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  { id: 1, text: "Apple" },
  { id: 2, text: "Banana" },
  { id: 3, text: "Cherry" }
]);
</script>
