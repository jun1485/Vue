<template>
  <div>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('');
    return { message };
  },
};
</script>


// modelValue, update:modelValue
// 자식 컴포넌트
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
};
</script>


// 부모 컴포넌트 
<template>
  <div>
    <ChildComponent v-model="inputValue" />
    <p>입력 값: {{ inputValue }}</p>
  </div>
</template>
<script>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  setup() {
    const inputValue = ref('');

    return {
      inputValue,
    };
  },
};
</script>
