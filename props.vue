// props 옵션을 사용해 선언.
export default {
  props: ['foo'],
  created() {
    // props는 `this`에 노출됩니다.
    console.log(this.foo)
  }
}
