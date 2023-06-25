// 손자 컴포넌트
<template>
  <button @click="updateValue">{{ modelValue }}</button>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const updateValue = () => {
      emit('update:modelValue', props.modelValue + 1);
    };

    return {
      updateValue
    };
  }
}
</script>

// 부모 컴포넌트
<template>
  <grand-child-component :modelValue="modelValue" @update:modelValue="updateValue" />
</template>

<script>
import GrandChildComponent from './GrandChildComponent.vue';

export default {
  components: {
    GrandChildComponent
  },
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const updateValue = (value) => {
      emit('update:modelValue', value);
    };

    return {
      updateValue
    };
  }
}
</script>

// 할아버지 컴포넌트
<template>
  <parent-component :modelValue="data" @update:modelValue="data = $event" />
</template>

<script>
  import { ref } from 'vue';
import ParentComponent from './ParentComponent.vue';

export default {
  components: {
    ParentComponent
  },
  setup() {
    const data = ref(0);

    return {
      data    };
  }
}
</script>
