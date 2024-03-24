<!-- ParantComponent.vue -->
<template>
  <ChildComponent v-model="data" />
  <p>자식 컴포넌트에서의 입력값: {{ data }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const data = ref("");
</script>

<style lang="scss"></style>


<!-- ChildComponent.vue -->
<template>
  <div>
    <input :value="modelValue" @input="onInput" />
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import { ref } from "vue";

const emit = defineEmits(["update:modelValue"]);
const modelValue = ref("");

const onInput = (e: Event) => {
  modelValue.value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", modelValue.value);
};
</script>

<style lang="scss"></style>
