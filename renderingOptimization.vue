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

// defineAsyncComponent의 옵션으로 컴포넌트를 로딩하는 동안 다른 컴포넌트를 보여주거나, 로딩에 실패했을 경우 처리 가능
<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const showComponent = ref(true)
const MyAsyncComponent = defineAsyncComponent(() => import('./MyAsyncComponent.vue'))

const MyAsyncComponent = defineAsyncComponent({
  loader: () => import('./MyAsyncComponent.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200, // 200ms 지연 후 loadingComponent를 보여줍니다.
  timeout: 3000, // 3초 후에 로딩이 완료되지 않으면 errorComponent를 보여줍니다.
})
</script>


// v-memo는 컴포넌트 렌더링을 최적화하기 위해 사용됨.
// 주어진 배열의 값이 이전 렌더링에서 변경되지 않았을 경우 해당 컴포넌트나 엘리멘트의 리렌더링을 건너뜀.
<div v-memo="[someProp, someOtherProp]">
  <!-- 컨텐츠 -->
</div>

// v-memo는 최상위 루트 노드에만 적용 가능.
// v-memo 예시
<template>
  <ul>
    <li v-for="item in items" :key="item.id" v-memo="[item.name]">
      {{ item.name }} // item.name 이 변경되지 않으면 리렌더링 되지 않음.
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  // ...
])
</script>


const state = reactive({ name: 'Alice' })
state.age = 30 // 'age' 프로퍼티는 반응성을 가지지 X
