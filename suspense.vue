// Vue3에서 suspense 는 비동기 컴포넌트의 로딩 상태를 처리하고, 
// 해당 컴포넌트가 로드될 때까지 대체 컨텐츠를 보여주는 기능을 제공

<script setup>
import { defineAsyncComponent } from 'vue';

const AsyncComponent = defineAsyncComponent(() =>
  import('./components/MyAsyncComponent.vue')
);
</script>
