<p>텍스트 보간법 사용: {{ rawHtml }}</p>
<p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>


// 이중 중괄호는 HTML 속성 내에서 사용 불가능하기 때문에 v-bind 사용
<div :id="dynamicId"></div>

// data 속성을 단일 엘리먼트에 바인딩
<div v-bind="objectOfAttrs"></div>


// JS 표현식
{{ number + 1 }}

{{ ok ? '예' : '아니오' }}

{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>


// 함수 호출
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>


<a v-on:click="doSomething"> ... </a>

<!-- 단축 문법 -->
<a @click="doSomething"> ... </a>


<!-- 이렇게 하면 컴파일러 경고가 트리거. -->
<a :['foo' + bar]="value"> ... </a>

// 브라우저에서 속성이름을 소문자로 강제 변환 -> :someattr
<a :[someAttr]="value"> ... </a>


// 수식어 (.prevent) -> 트리거된 이벤트에서 event.preventDefault()를 호출하도록 v-on디렉티브에 지시.
<form @submit.prevent="onSubmit">...</form>
