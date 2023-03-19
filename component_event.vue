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


// emits 옵션으로 명시적으로 발신할 이벤트를 선언.
export default {
  emits: ['inFocus', 'submit']
}

// emit도 구조분해할당 가능.
export default {
  emits: ['inFocus', 'submit'],
  setup(props, { emit }) {
    emit('submit')
  }
}


// 유효성 검사와 객체 구문으로 이벤트 전달
export default {
  emits: {
    // 유효성 검사 없음
    click: null,

    // submit 이벤트 유효성 검사
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('submit 이벤트 페이로드가 옳지 않음!')
        return false
      }
    }
  },
  methods: {
    submitForm(email, password) {
      this.$emit('submit', { email, password })
    }
  }
}
