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


// Vue 3에서는 createElement 함수의 별칭으로 h 함수가 도입됨.
// h 함수는 React의 JSX와 유사한 패턴을 따르는 것을 목표로 하며, 동일한 인자를 받음.
import { h } from 'vue';

export default {
  render() {
    return h(
      'div',
      {
        class: 'foo',
        onClick: this.handleClick
      },
      '클릭하세요!'
    );
  },
  methods: {
    handleClick() {
      console.log('클릭됨!');
    }
  }
};

edit in place
