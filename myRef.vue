<script setup lang="ts">
function ref(initValue) {
  let _value = initValue;

  const reactiveObject = {
    get value() {
      return _value;
    },
  };
}
</script>

<template>
  <div></div>
</template>
