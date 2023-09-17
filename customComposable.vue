// useCounter.ts
import { ref } from 'vue';

export default function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  
  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return {
    count,
    increment,
    decrement
  };
}


// useFetch.ts
import { ref, Ref } from 'vue';

interface FetchState<T> {
  data: Ref<T | null>;
  isLoading: Ref<boolean>;
  error: Ref<any>;
}
