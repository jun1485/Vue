// 마운트란, 뷰에서 컴포넌트 인스턴스가 생성되고, 이 인스턴스가 실제 DOM과 연결되는 과정.
// 컴포넌트가 마운트 되면 해당 컴포넌트의 데이터와 메소드들이 DOM과 연결되어 사용자가 볼 수 있음.


// onBeforeMounted
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


// onBeforeMount
