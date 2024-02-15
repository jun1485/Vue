// watch 함수는 지정된 데이터나 계산된 속성이 변경될 때 사용자 정의 반응(콜백 함수)을 실행
// 주로 데이터 변경에 따른 비동기 연산이나, 변경에 따른 복잡한 로직을 처리할 때 사용

// 데이터 변경에 따라 비동기 요청 수행, 데이터 가져오거나 다른 비동기 작업을 수행하는데 적합.
// 데이터 변경에 따라 특정 작업 수행 용이.

watch: {
  'someObject.deepProperty': {
    handler(newValue, oldValue) {
      // ...
    },
    deep: true, // 객체 내부까지 감시
    immediate: true // 컴포넌트 생성시 핸들러 즉시 실행
  }
}

watch: {
  someArray: {
    handler(newValue, oldValue) {
      // 배열이나 내부 요소가 변경될 때 실행
    },
    deep: true
  }
}
