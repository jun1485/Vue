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
