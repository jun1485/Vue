// reactive는 객체를 proxy로 감싸 반응형으로 만듦.
// 그러나 객체가 처음 생성될 때 없던 속성을 나중에 동적으로 추가하면, 그 속성은 반응형이 아님.
const state = reactive({ count: 0 });
state.newProp = 'Not reactive';  // 반응성을 가지지 않음

// 위 문제를 해결하기 위해서, Vue.set함수를 사용하거나 새로운 객체를 할당해야 함.
// Vue.set을 사용하는 방법 (Vue 2에서 유용)
// Vue.set(state, 'newProp', 'Now reactive');

// 새 객체 할당
state = reactive({ ...state, newProp: 'Now reactive' });


// reactive 객체를 구조분해하면, 해당 property는 반응성을 잃는다.
const { count } = reactive({ count: 0 });  // 이제 count는 반응성을 가지지 않음
