// 사용자 정의 이벤트 발신
<!-- MyComponent -->
<button @click="$emit('someEvent')">클릭하기</button>

// 컴포넌트 인스턴스에서 this.$emit()으로도 사용 가능
export default {
  methods: {
    submit() {
      this.$emit('someEvent')
    }
  }
}
