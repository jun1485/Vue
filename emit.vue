// home.vue

<template>
  <div>
    <h1>Welcome to Home</h1>
    <inputField :title="title" />
  </div>
</template>
<script>
import inputField from '@/components/inputField.vue'
export default {
  data() {
    return {
      title: ""
    }
  },
  components: {
    inputField
  }
}
</script>

<style>

</style>

// inputField
