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


// computed는 계산된 속성을 정의, 내부적으로 캐싱을 수행.
// 캐싱? 결과값을 메모리에 임시 저장하여, 다음에 동일한 계산이 요청될 경우 빠르게 결과를 반환하는 기술.
<template>
  <div>{{ reversedMessage }}</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const message = ref('Hello Vue!') // message 값이 변경되지 않으면 reversedMessage도 다시 계산되지 않음.(이전 값 캐싱)
const reversedMessage = computed(() => message.value.split('').reverse().join(''))
</script>


// defineAsyncComponent는 비동기 컴포넌트를 쉽게 생성할 수 있게 하는 함수.
// 웹팩의 코드 분할, 레이지 로딩 등 기능을 쉽게 구현 가능.
import { defineAsyncComponent } from 'vue'

const MyAsyncComponent = defineAsyncComponent(() => import('./MyAsyncComponent.vue'))

<template>
  <div>
    <MyAsyncComponent v-if="showComponent" />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const showComponent = ref(true)
const MyAsyncC
