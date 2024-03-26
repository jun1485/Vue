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


// defineModel()에 첫번째 인수로 문자열을 전달하여 전달 가능.
<!-- ParantComponent.vue -->
<template>
  <div>
    <ChildComponent v-model:title="modelValue" />
    자식으로부터의 데이터: {{ modelValue }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const modelValue = ref();
</script>

<style lang="scss"></style>


<!-- ChildComponent.vue -->
<template>
  <div>
    <input v-model="modelValue" />
  </div>
</template>

<script setup lang="ts">
import { defineModel } from "vue";
const modelValue = defineModel("title");
</script>

<style lang="scss"></style>


// default값 지정
<template>
  <div>
    <input v-model="modelValue" />
  </div>
</template>

<script setup lang="ts">
import { defineModel } from "vue";
const modelValue = defineModel<string>("title", { default: "default title" });
</script>

<style lang="scss"></style>
