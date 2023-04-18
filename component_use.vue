<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      message: 'Hello, World!'
    });

    return {
      message: state.message
    }
  }
}
</script>


// 다른 컴포넌트에서 사용
<template>
  <div>
    <my-component />
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue';

export default {
  components: {
    'my-component': MyComponent
  }
}
</script>


// 컴포넌트는 왜 만드는가? 재사용하는 목적이 무엇인가? 를 고려하여 설계한다.
// 다른 사용자가 사용할 컴포넌트를 만든다고 생각하고, 그 사용자가 필요할 만한(커스텀) 것들을 생각해서 만든다.

// model
import { reactive } from 'vue';

export const todoListModel = reactive({
  todos: [],
  addTodo: function (todo) {
    this.todos.push(todo);
  },
  removeTodo: function (index) {
    this.todos.splice(index, 1);
  },
});
