watch: {
  'someObject.deepProperty': {
    handler(newValue, oldValue) {
      // ...
    },
    deep: true, // 객체 내부까지 감시
    immediate: true // 컴포넌트 생성시 핸들러 즉시 실행
  }
}

