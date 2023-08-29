// reactive는 객체를 proxy로 감싸 반응형으로 만듦.
// 그러나 객체가 처음 생성될 때 없던 속성을 나중에 동적으로 추가하면, 그 속성은 반응형이 아님.
const state = reactive({ count: 0 });
state.newProp = 'Not reactive';  // 반응성을 가지지 않음

