<template>
  <component :is="Icon" :width="width" :height="height" :fill="fill" />
</template>

<script>
import * as icons from 'assets/icons/index';
import { ref, watchEffect } from "vue";

export default {
  props: {
    name: String,
    width: Number,
    height: Number,
    fill: String
  },

  setup(props) {
    const Icon = ref(null);

    watchEffect(() => {
      Icon.value = icons[props.name];
    });

    return { Icon };
  }
};
</script>


// 사용
