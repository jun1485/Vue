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


// 객체에 v-for 사용
<ul>
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>

data() {
  return {
    myObject: {
      title: 'Vue에서 목록을 작성하는 방법',
      author: '홍길동',
      publishedAt: '2016-04-10'
    }
  }
}


// v-for를 key와 함께 사용
// key에는 문자열, 심볼, 숫자 형식의 값만 바인딩.
<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>
