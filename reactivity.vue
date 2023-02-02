export default {
  data() {
    return {
      someObject: {}
    }
  },
  mounted() {
    const newObject = {}
    this.someObject = newObject

    console.log(newObject === this.someObject) // false
  }
}



export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    // 메서드는 수명 주기 훅 또는 다른 메서드에서 호출 
    this.increment()
  }
}



export default {
  methods: {
    increment: () => {
      //  화살표 함수는 vue가 this를 컴포넌트 인스턴스로 바인딩하는 것을 방지하기 떄문에
      //  여기서 `this`에 접근할 수 없음,
    }
  }
}

<button @click="increment">{{ count }}</button>  // methods는 컴포넌트 템플릿 내에서 접근 가능, 주로 이벤트 리스너에서 사용



import { nextTick } from 'vue'

export default {
  methods: {
    increment() {
      this.count++
      nextTick(() => {
        // 업데이트된 DOM에 접근 가능 ( 상태변경 후, DOM 업데이트가 완료된 시점 )
      })
    }
  }
}



export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
      }
    }
  },
  methods: {
    mutateDeeply() {
      // Vue는 기본적으로 반응형 상태를 깊게 추적하므로, 중첩된 객체나 배열의 변경 사항 감지 가능.
      this.obj.nested.count++
      this.obj.arr.push('baz')
    }
  }
}
