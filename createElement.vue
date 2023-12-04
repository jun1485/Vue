// Vue에서 'createElement'함수와 'h'함수는 가상 DOM 요소를 생성하는 데 사용됨.
// 컴포넌트, HTML태그, 해당 태그의 자식 요소들을 프로그래밍 방식으로 생성할 때 사용됨.

new Vue({
  render(createElement) {
    return createElement(
      'div',
      {
        'class': {
          foo: true,
          bar: false
        },
        on: {
          click: this.handleClick
        }
      },
      '클릭하세요!'
    );
  },
  methods: {
    handleClick() {
      console.log('클릭됨!');
    }
  }
});
