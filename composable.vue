// 컴포저블이란, 여러 컴포넌트에서 공유할 수 있는 vue.js 함수.
// 컴포저블은 로직을 캡슐화하고 재사용하는데 사용.
// ex. API 호출, 유효성 검사, 상태 관리 등 공통 로직을 컴포저블로 작성하고 여러 컴포넌트에서 재사용.

import { ref, onMounted } from 'vue'
import axios from 'axios'

export default function useApi(url) {
  const data = ref(null)
  const error = ref(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      data.value = response.data
    } catch (e) {
      error.value = e
    }
  }

  onMounted(fetchData)

  return { data, error, fetchData }
}
