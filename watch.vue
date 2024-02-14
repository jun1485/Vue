// watch 함수는 지정된 데이터나 계산된 속성이 변경될 때 사용자 정의 반응(콜백 함수)을 실행
// 주로 데이터 변경에 따른 비동기 연산이나, 변경에 따른 복잡한 로직을 처리할 때 사용

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
