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


// computed 에 바인딩 : 일반적인 패턴
<div :class="classObject"></div>

data() {
  return {
    isActive: true,
    error: null
  }
},
computed: {
  classObject() {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}


// 배열로 바인딩
<div :class="[activeClass, errorClass]"></div>

data() {
  return {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}


// 삼항연산자로 클래스 토글
<div :class="[isActive ? activeClass : '', errorClass]"></div>

