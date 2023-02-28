// v-for 디렉티브를 사용해 배열을 리스트로 렌더링
<li v-for="item in items">
  {{ item.message }}
</li>

data() {
  return {
    items: [{ message: 'Foo' }, { message: 'Bar' }]
  }
}


// 
<li v-for="(item, index) in items">
  {{ parentMessage }} - {{ index }} - {{ item.message }}
</li>

data() {
  return {
    parentMessage: 'Parent',
    items: [{ message: 'Foo' }, { message: 'Bar' }]
  }
}
