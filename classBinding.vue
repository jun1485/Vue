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


// 바인딩된 객체는 인라인일 필요가 없다.
<div :class="classObject"></div>

data() {
  return {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
}
