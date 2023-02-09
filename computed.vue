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


// computed 속성은 기본적으로 getter 전용.
// "수정 가능한" computed가 필요한 경우, getter와 setter를 모두 제공하여 속성을 만들 수 있음.
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // 참고: 분해 할당 문법을 사용함.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}
