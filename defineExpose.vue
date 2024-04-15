<script setup> // defineExpose는 <script setup> 내에서만 사용 가능.
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

// increment 함수와 count 변수를 외부에서 접근 가능하게 만듭니다.
defineExpose({ increment, count })
</script>

// 한 컴포넌트 내에서 여러번 사용될 수 있지만, 각 호출은 이전에 노출된 속성이나 메서드를 덮어쓰지 않고 합쳐짐.
