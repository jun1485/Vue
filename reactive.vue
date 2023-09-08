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

// 위 문제를 해결하기 위해  toRefs, toRef를 사용.
import { toRefs } from 'vue';

const state = reactive({ count: 0, name: 'Vue' });
const { count, name } = toRefs(state);


// 배열의 index를 통해 직접 값을 변경하면, 그 변경은 반응성이 아닐 수 있음.
const state = reactive({ numbers: [1, 2, 3] });
state.numbers[0] = 10;  // 이 변경은 반응형이 아닐 수 있음

// 반응성을 유지하려면, 배열 메소드를 사용하거나 전체 배열을 새로 할당해야 함.
// 메소드 사용
state.numbers.splice(0, 1, 10);

// 전체 배열 새로 할당
state.numbers = [...state.numbers];
// 이런 경우는 vue3 반응성 시스템의 특성과 JS언어의 한계로 인해 발생.
// 따라서, 반응성을 유지하려면 명시적으로 처리해야 함.
