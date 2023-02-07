<p>{{ calculateBooksMessage() }}</p>

// 컴포넌트 내에서
// 계산된 속성은 의존된 반응형을 기반으로 캐시.
methods: {
  calculateBooksMessage() {
    return this.author.books.length > 0 ? 'Yes' : 'No'
  }
}

// Date.now()가 반응형으로써 의존된 것이 아니기 때문에 계산된 속성이 업데이트 되지 않음.
// 반대로 메서드 호출은 리렌더링이 발생할 때마다 항상 함수를 실행.
computed: {
  now() {
    return Date.now()
  }
}
