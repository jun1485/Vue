// v-if, 디렉티브 표현식이 truthy일 때만 렌더링
<h1 v-if="awesome">Vue는 정말 멋지죠!</h1>
<h1 v-else>아닌가요? 😢</h1>


// v-show, falsy에서도 항상 요소가 렌더링 되어 DOM에 남아있는 상태, display CSS속성만 변화한다.
<h1 v-show="ok">안녕!</h1>
