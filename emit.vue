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

// 부모 컴포넌트
<template>
  <div>
    <ChildComponent @update="onUpdate" />
    <p>받은 데이터: {{ receivedData }}</p>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      receivedData: "",
    };
  },
  methods: {
    onUpdate(param1, param2) {
      // 자식 컴포넌트로부터 받은 파라미터를 활용
      this.receivedData = `파라미터1: ${param1}, 파라미터2: ${param2}`;
    },
  },
};
</script>
