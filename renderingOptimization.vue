// key 속성이 없으면, Vue는 기존 DOM 요소를 재사용함.
// 예를 들어, item이 삭제되면 마지막 요소만 DOM에서 제거되고 나머지 요소는 그대로 재사용됨.
// 이로 인해 예상치 못한 사이드 이펙트를 초래.
<ul>
  <li v-for="item in items" :key="item.id">{{ item.text }}</li>
</ul>
