// 마운트란, 뷰에서 컴포넌트 인스턴스가 생성되고, 이 인스턴스가 실제 DOM과 연결되는 과정.
// 컴포넌트가 마운트 되면 해당 컴포넌트의 데이터와 메소드들이 DOM과 연결되어 사용자가 볼 수 있음.


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
