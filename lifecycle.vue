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
