<p>텍스트 보간법 사용: {{ rawHtml }}</p>
<p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>


// 이중 중괄호는 HTML 속성 내에서 사용 불가능하기 때문에 v-bind 사용
<div :id="dynamicId"></div>

// data 속성을 단일 엘리먼트에 바인딩
<div v-bind="objectOfAttrs"></div>
