<!-- ComponentA.vue -->
<template>
  <div>
    <p>This is Component A</p>
    <p>{{ someProp }}</p>
    <button @click="emitEvent">Emit Event</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ someProp: string }>();
const emit = defineEmits(['customEvent']);

const emitEvent = () => {
  emit('customEvent', 'Event from Component A');
};
</script>


// ComponenB.vue
<template>
  <div>
    <h3>Deeply Nested Child Component</h3>
    <p>{{ sharedState.message }}</p>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const sharedState = inject('sharedState');

    return { sharedState };
  }
}
</script>


<!-- ComponentB.vue -->
<template>
  <div>
    <p>This is Component B</p>
    <p>{{ someProp }}</p>
    <button @click="emitEvent">Emit Event</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ someProp: string }>();
const emit = defineEmits(['customEvent']);

const emitEvent = () => {
  emit('customEvent', 'Event from Component B');
};
</script>


<template>
  <div>
    <button @click="currentComponent = 'ComponentA'">Load Component A</button>
    <button @click="currentComponent = 'ComponentB'">Load Component B</button>
    <component :is="componentMap[currentComponent]" v-bind="componentProps" @customEvent="handleEvent"></component>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

const currentComponent = ref('ComponentA');
const componentMap = {
  ComponentA,
  ComponentB
};

const componentProps = ref({
  someProp: 'Some Value'
});

const handleEvent = (payload: any) => {
  console.log('Custom event received:', payload);
};
</script>

<style scoped>
/* Tailwind CSS styles */
</style>
