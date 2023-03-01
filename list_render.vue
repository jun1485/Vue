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


const parentMessage = 'Parent'
const items = [
  /* ... */
]

items.forEach((item, index) => {
  // forEach의 콜백 함수 외부에 있는 `parentMessage`에 대한 접근 가능.
  // 반면 `item`과 `index`는 콜백함수 내부에서만 접근 가능.
  console.log(parentMessage, item.message, index)
})
