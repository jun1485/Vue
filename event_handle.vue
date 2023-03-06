// 인라인 핸들러
<button @click="count++">1 추가</button>
<p>숫자 값은: {{ count }}</p>

data() {
  return {
    count: 0
  }
}
