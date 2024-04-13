<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

// increment 함수와 count 변수를 외부에서 접근 가능하게 만듭니다.
defineExpose({ increment, count })
</script>
