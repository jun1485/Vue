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


// 조건부 클래스 여러개 적용 (배열 구문 내에서 객체 구문 가능)
<div :class="[{ active: isActive }, errorClass]"></div>


// 인라인 스타일 바인딩
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

data() {
  return {
    activeColor: 'red',
    fontSize: 30
  }
}


// 스타일 객체를 직접 바인딩 하는것이 더 깔끔
<div :style="styleObject"></div>

data() {
  return {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
}


// 다중 값 제공 가능, 이 경우 브라우저가 지원하는 배열 내 마지막 값을 적용하여 렌더링.
<div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }"></div>

