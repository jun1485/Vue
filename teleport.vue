// 컴포넌트의 마크업을 다른 위치의 DOM으로 '이동'시키는 기능
// 렌더링 위치와 실제 DOM 트리에서의 위치 분리 가능.

// 아래는 자주 쓰이는 teleport의 예.
// 모달, 알림, 팝업 등의 UI요소를 body태그 아래 또는 다른 DOM 요소로 이동
// z-index 스태킹 컨텍스트, overflow:hidden 등 CSS문제를 우회하고 싶을 때

<teleport to="#end-of-body">
  <div>I will be rendered at the end of body tag!</div>
</teleport>
