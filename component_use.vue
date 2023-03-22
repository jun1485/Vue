<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      message: 'Hello, World!'
    });

    return {
      message: state.message
    }
  }
}
</script>


// 다른 컴포넌트에서 사용
<template>
  <div>
    <my-component />
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue';

export default {
  components: {
    'my-component': MyComponent
  }
}
</script>
