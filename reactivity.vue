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


// 메서드 상태유지
// 여러 컴포넌트가 인스턴스가 동일한 디바운스 함수를 공유하는 경우, 서로를 간섭하게 됨.
// 디바운스된 함수가 일정 시간이 지나기 전까지 유지되기 때문에 재사용되는 컴포넌트에는 문제가 있음.
import { debounce } from 'lodash-es'

export default {
  methods: {
    // Lodash로 디바운싱
    click: debounce(function () {
      // ... 클릭에 응답 ...
    }, 500)
  }
}


// 디바운스된 함수를 각각 독립적으로 유지하기 위해 created 훅에서 관리
export default {
  created() {
    // 이제 각 인스턴스는 자체적인 디바운스된 핸들러를 가집니다.
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // 컴포넌트가 제거된 후 
    // 타이머를 취소하는 것은 좋은 방법입니다.
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... 클릭에 응답 ...
    }
  }
}
