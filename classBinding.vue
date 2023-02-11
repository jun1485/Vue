// 객체로 바인딩
<div :class="{ active: isActive }"></div>


<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
>
</div>

data() {
  return {
    isActive: true,
    hasError: false
  }
}
// 최종적으로 아래처럼 렌더링됨.
<div class="static active"></div>
