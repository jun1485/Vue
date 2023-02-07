<p>{{ calculateBooksMessage() }}</p>

// 컴포넌트 내에서
// 계산된 속성은 의존된 반응형을 기반으로 캐시.
methods: {
  calculateBooksMessage() {
    return this.author.books.length > 0 ? 'Yes' : 'No'
  }
}
