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
