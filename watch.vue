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
    },
    deep: true  // 배열이나 내부 요소가 변경될 때 실행
  }
}


// watch는 데이터의 변화에 따라 부수 효과를 처리하는 데 사용, computed는 주로 데이터를 파생시키는 데 사용
// 데이터 변화에 따른 로직이 복잡하거나, 비동기 작업을 수행해야 하는 경우 watch 사용이 적합.

// 비동기 작업과 함께 사용
import { watch, ref } from 'vue';

const searchQuery = ref('');

watch(() => searchQuery.value, async newValue => {
  const result = await fetch(`https://api.example.com/search?q=${newValue}`);
  console.log(await result.json());
}, { immediate: false }); 


// immediate: true시 컴포넌트가 mount 될 때 지정한 반응형 소스가 처음으로 watch를 시작할 때, 즉시 콜백 함수를 실행.
watch(() => selectedUserId, async (newId) => {
  const userData = await fetchUserData(newId);
  console.log(userData);
}, { immediate: true });


// watch( () => {}, () => {} ) 형태
watch(
  () => currentCurrencyAmount.value, // 감시 대상을 반환하는 함수
  (newValue, oldValue) => {
    // 변화가 감지될 때 실행될 콜백 함수
    // 여기서는 currentCurrencyAmount의 변화를 감시합니다.
  },
  { deep: true, immediate: true } // 옵션 객체 (선택사항)
);
