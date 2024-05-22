<script setup lang="ts">
function ref(initValue) {
  let _value = initValue;

  const reactiveObject = {
    get value() {
      return _value;
    },

    set value(newValue) {
      _value = newValue;
    },
  };

  return reactiveObject;
}
</script>

<template>
  <div></div>
</template>
