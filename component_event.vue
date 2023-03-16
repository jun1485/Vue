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

<MyComponent @some-event="callback" />



// $emit에 추가 인자를 전달하여, 
<button @click="$emit('increaseBy', 1)">
  Increase by 1
</button>

<MyButton @increase-by="(n) => count += n" />   ===   <MyButton @increase-by="increaseCount" />
// 해당 메서드의 첫 번째 파라미터로 값이 전달됨.
methods: {
  increaseCount(n) {
    this.count += n
  }
