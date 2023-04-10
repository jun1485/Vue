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



// 자식 컴포넌트
<template>
  <button @click="sendData">데이터 보내기</button>
</template>

<script>
export default {
  methods: {
    sendData() {
      // 여러 파라미터를 담아 보내기
      this.$emit("update", "안녕하세요", 123);
    },
  },
};
</script>
