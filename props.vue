// props 옵션을 사용해 선언.
export default {
  props: ['foo'],
  created() {
    // props는 `this`에 노출됩니다.
    console.log(this.foo)
  }
}


// 객체 문법 사용도 가능
export default {
  props: {
    title: String,
    likes: Number
  }
}


// 템플릿 표현식에서 사용
<span>{{ greetingMessage }}</span>

export default {
  props: {
    greetingMessage: String
  }
}


// 정적인 값 전달
<BlogPost title="Vue와 함께한 나의 여행" />

// v-bind를 사용한 동적인 값 전달
<BlogPost :title="post.title" />
<BlogPost :title="post.title + ' by ' + post.author.name" />


// 배열 값 전달
<!-- 배열이 정적이더라도 Vue에 이것이 문자열이 아닌         -->
<!-- JavaScript 표현식임을 알려주려면 v-bind가 필요합니다. -->
<BlogPost :comment-ids="[234, 266, 273]" />

<!-- 변수 값을 동적으로 할당 -->
<BlogPost :comment-ids="post.commentIds" />


// 객체 값 전달
<!-- 객체가 정적이더라도 Vue에 이것이 문자열이 아닌         -->
<!-- JavaScript 표현식임을 알려주려면 v-bind가 필요합니다. -->
<BlogPost
  :author="{
    name: '신형만',
    company: '떡잎 상사'
  }"
 />

<!-- 변수 값을 동적으로 할당 -->
<BlogPost :author="post.author" />

// 다음 템플릿을
<BlogPost :id="post.id" :title="post.title" /> 
// 아래와 같이 객체 자체를 바인딩도 가능.
<BlogPost v-bind="post" />


// prop을 초기값을 전달하는 데에만 사용
export default {
  props: ['initialCounter'],
  data() {
    return {
      // props.initialCounter는 counter의 초기 값으로 사용됩니다.
      // 추후 props가 갱신되어도 counter 값이 업데이트 되지 않습니다.
      counter: this.initialCounter
    }
  }
}


// ParentComponent.vue
<template>
  <div>
    <h1>Parent Component</h1>
    <ChildComponent :message="parentMessage" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hello from Parent Component'
    };
  }
};
</script>

// ChildComponent.vue
<template>
  <div>
    <h2>Child Component</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  }
};
</script>


// props 정의
export default {
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object
  }
}
