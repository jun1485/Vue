// v-for 디렉티브를 사용해 배열을 리스트로 렌더링
<li v-for="item in items">
  {{ item.message }}
</li>

data() {
  return {
    items: [{ message: 'Foo' }, { message: 'Bar' }]
  }
}
