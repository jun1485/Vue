// 마운트란, 뷰에서 컴포넌트 인스턴스가 생성되고, 이 인스턴스가 실제 DOM과 연결되는 과정.
// 컴포넌트가 마운트 되면 해당 컴포넌트의 데이터와 메소드들이 DOM과 연결되어 사용자가 볼 수 있음.


// onBeforeMount
// 컴포넌트 초기화에 대한 작업, 외부 데이터를 불러오는 작업.
// DOM에 접근하는 것은 불가능
import { onBeforeMount } from 'vue';

export default {
  setup() {
    // 데이터를 초기화합니다.
    const initData = () => {
      console.log('데이터를 초기화합니다.');
    };

    // 외부 API에서 데이터를 가져옵니다.
    const fetchData = async () => {
      console.log('외부 API에서 데이터를 가져옵니다.');
      // API 호출을 수행하는 코드를 작성합니다.
    };

    onBeforeMount(() => {
      initData();
      fetchData();
    });

    return {
      // 다른 데이터와 메서드를 반환합니다.
    };
  },
};

//
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    onMounted(() => {
      console.log('컴포넌트가 마운트되었습니다.');
    });

    onUpdated(() => {
      console.log('컴포넌트가 업데이트되었습니다.');
    });

    onUnmounted(() => {
      console.log('컴포넌트가 마운트 해제되었습니다.');
    });

    return {
      count,
      increment
    };
  },
};


// onMounted
// 컴포넌트가 마운트되어 실제 DOM에 삽입된 직후에 호출되는 함수.
// 컴포넌트의 인스턴스가 실제 DOM과 연결된 시점에서 호출되므로, DOM 요소에 접근하거나 외부 라이브러리를 초기화하는 작업 수행 가능.
export default {
  setup() {
    const message = ref('');

    const fetchData = async () => {
      console.log('외부 API에서 데이터를 가져옵니다.');
      // 외부 API 호출을 수행하는 코드를 작성합니다.
      // 예를 들어, API 결과를 message에 저장합니다.
      message.value = 'API에서 가져온 데이터';
    };

    onMounted(() => {
      console.log('컴포넌트가 마운트되었습니다.');
      fetchData();
    });

    return {
      message
    };
  },
};

// onBeforeUpdate
// 컴포넌트가 다시 렌더링되기 직전에 호출되는 함수. ( 컴포넌트의 데이터가 변경되어 DOM이 새로 생성되기 전에 호출 )
// 컴포넌트의 변경 사항을 가로채거나, 변경 전의 데이터 저장 작업 가능.

import { ref, onBeforeUpdate } from 'vue';

export default {
  setup() {
    const count = ref(0);
    let previousCount = 0;

    const increment = () => {
      previousCount = count.value; // 변경 전의 데이터를 저장합니다.
      count.value++;
    };

    onBeforeUpdate(() => {
      console.log('컴포넌트가 업데이트되기 전입니다.');
      console.log('이전 count 값:', previousCount);
      console.log('현재 count 값:', count.value);
    });

    return {
      count,
      increment
    };
  },
};


// 컴포넌트가 업데이트 되고 난 뒤에 호출되는 함수.
// 컴포넌트의 데이터가 변경되어 가상 DOM이 새로 생성되고, 이 변경사항이 실제 DOM에 적용된 직후에 호출.
// 변경된 데이터에 따른 DOM 조작이나, 외부 라이브러리 연동 작업 수행 가능.
// onUpdated

import { onBeforeUnmount } from 'vue';

export default {
  setup() {
    const intervalId = setInterval(() => {
      console.log('인터벌 작동 중...');
    }, 1000);

    onBeforeUnmount(() => {
      console.log('컴포넌트가 언마운트되기 전입니다.');
      clearInterval(intervalId); // 인터벌 정리 작업 수행
    });
  },
};
